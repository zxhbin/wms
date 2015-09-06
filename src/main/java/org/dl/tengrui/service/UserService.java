package org.dl.tengrui.service;



import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;
import org.dl.tengrui.dao.UserDao;
import org.dl.tengrui.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private static final Logger logger = Logger.getLogger(UserService.class);
    @Autowired
    private UserDao userDao;
    
    public List<User> getUsers(String searchText, String userId)
            throws Exception {
        List<User> userList = null;
        if (StringUtils.isNotBlank(searchText)) {
           // userList = userDao.queryByPara(userId, searchText);
        } else {
            userList = userDao.query(userId);
        }
        return userList;
    }
    
}
