package org.dl.tengrui.servlet;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;

public class LogoutServlet extends HttpServlet {

    /** log object */
    private static Logger logger = Logger.getLogger(LogoutServlet.class);

    private static final long serialVersionUID = 1L;

    /**
     * ログアウト機能を処理する。
     */
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) {
        HttpSession session = req.getSession(false);
        try {
            // delete user session
            session.removeAttribute("AIRR_USER_ID");
            session.removeAttribute("AIRR_USER_AUTH");
        } catch (Exception ex) {
            logger.warn(ex.getMessage());
        }
    }
}
