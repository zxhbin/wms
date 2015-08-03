package org.dl.tengrui.common;

import java.io.InputStream;
import java.util.Properties;

import javax.ws.rs.WebApplicationException;

import org.apache.log4j.Logger;

/**
 * Property Util Class
 * 
 * @author echp
 * @version 1.0
 */
public class PropUtil extends Properties {

    /** log object **/
    private static final Logger logger = Logger.getLogger(PropUtil.class);
    private static final long serialVersionUID = 1L;
    /** PropUtil Instance **/
    private static PropUtil instance;

    /**
     * Constructor
     */
    private PropUtil() {
        InputStream is = null;
        is = getClass().getResourceAsStream("/wms.properties");
        try {
            load(is);
        } catch (Exception e) {
            logger.error(e.getMessage());
            throw new WebApplicationException();
        }
    }

    /**
     * Get Property util instance
     * 
     * @return PropUtil
     */
    public static PropUtil getInstance() {
        if (instance == null)
            makeInstance();
        return instance;
    }

    /**
     * make instance
     */
    private static synchronized void makeInstance() {
        if (instance == null)
            instance = new PropUtil();
    }

}
