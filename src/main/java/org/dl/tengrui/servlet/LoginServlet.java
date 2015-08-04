package org.dl.tengrui.servlet;

import java.io.StringReader;
import java.security.NoSuchAlgorithmException;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.io.IOUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.dl.tengrui.common.SpringConfig;
import org.dl.tengrui.common.Util;
import org.dl.tengrui.dao.UserDao;
import org.dl.tengrui.entity.User;

public class LoginServlet extends HttpServlet {

    private static Log logger = LogFactory.getLog(LoginServlet.class);

    private static final long serialVersionUID = 1L;


    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) {
        String userID = req.getHeader("userID");
        String pwd = req.getHeader("password");
        ServletOutputStream out = null;
        StringReader reader = null;
        try {
            if (StringUtils.isBlank(userID) || StringUtils.isBlank(pwd)) {
                logger.error("认证失败。");
                resp.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            } else {
                UserDao userDao = SpringConfig.getUserDao();
                String md5Pwd = null;
                try {
                    md5Pwd = Util.EncoderByMd5(pwd);
                } catch (NoSuchAlgorithmException e) {
                    logger.error("认证失败:" + e.getMessage());
                    resp.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                }
                User user = userDao.query(userID, md5Pwd);
                if (StringUtils.isBlank(user.getUserId())) {
                    logger.error("认证失败。");
                    resp.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                } else {
                    HttpSession session = req.getSession(true);
                    session.setAttribute("USER_ID", userID);
                    resp.setContentType("application/json");
                    String userJson = "{\"menus\":\"" + user.getPassword()
                            + "\",\"user_id\":\"" + user.getUserId()
                            + "\",\"user_name\":\"" + user.getUserName()
                            + "\"}";
                    out = resp.getOutputStream();
                    reader = new StringReader(userJson);
                    IOUtils.copy(reader, out, "UTF-8");
                    resp.setStatus(HttpServletResponse.SC_OK);
                    resp.flushBuffer();
                }
            }
        } catch (Exception ex) {
            logger.error("认证失败:" + ex.getMessage());
            resp.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        } finally {
            IOUtils.closeQuietly(out);
            IOUtils.closeQuietly(reader);
        }
    }

}
