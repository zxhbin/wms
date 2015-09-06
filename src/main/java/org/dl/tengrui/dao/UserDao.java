package org.dl.tengrui.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.dl.tengrui.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.RowCallbackHandler;
import org.springframework.stereotype.Repository;

@Repository
public class UserDao {

    /** log object **/
    private static final Logger logger = Logger.getLogger(UserDao.class);

    /** Jdbc Template Object **/
    @Autowired
    private JdbcTemplate jdbcTemplate;
    
    /**
     * @return the jdbcTemplate
     */
    public JdbcTemplate getJdbcTemplate() {
        return jdbcTemplate;
    }

    /**
     * @param jdbcTemplate
     *            the jdbcTemplate to set
     */
    public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    
    public static final String DB_USER_UID = "user_id";

    public static final String DB_USER_NAME = "user_name";

    public static final String DB_USER_PASSWORD = "pwd_md5";

    public static final String DB_USER_AUTH = "auth";

    public static final String DB_USER_EMAIL = "email";
    

    public List<User> query(long start, long amount) {

        String SQL_QUERY = "select * from user order by user_id limit ? offset ?";

        if (logger.isDebugEnabled()) {
            logger.debug(SQL_QUERY);
        }

        final List<User> listAllUsers = new ArrayList<User>();

        jdbcTemplate.query(SQL_QUERY, new Object[] {amount, start},
                new ResultSetExtractor<Object>() {
                    public Object extractData(ResultSet rs)
                            throws SQLException, DataAccessException {
                        while (rs.next()) {
                            User user = new User();

                            user.setUserId(rs.getString(DB_USER_UID));
                            user.setUserName(rs.getString(DB_USER_NAME));

                            listAllUsers.add(user);
                        }
                        return null;
                    }
                });

        return listAllUsers;

    }
    
    public User query(final String uid, final String pwd) {
        String SQL_QUERY_FORM_ID_PWD = "select * from user where user_id = ? and pwd_md5 = ?";
        if (logger.isDebugEnabled()) {
            logger.debug(SQL_QUERY_FORM_ID_PWD);
        }
        final User user = new User();
        jdbcTemplate.query(SQL_QUERY_FORM_ID_PWD, new Object[] {uid, pwd },
                new RowCallbackHandler() {
                    public void processRow(ResultSet rs) throws SQLException {
                        user.setUserId((rs.getString(DB_USER_UID)));
                        user.setUserName((rs.getString(DB_USER_NAME)));
                        user.setPassword(rs.getString(DB_USER_PASSWORD));
                    }
                });
        return user;
    }

}
