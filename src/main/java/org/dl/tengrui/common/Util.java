package org.dl.tengrui.common;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import org.apache.commons.codec.binary.Base64;
import org.apache.log4j.Logger;

public class Util {


    private static final Logger logger = Logger.getLogger(Util.class);

    /**
     * 
     * @param str
     * @return
     * @throws NoSuchAlgorithmException
     * @throws UnsupportedEncodingException
     */
    public static String EncoderByMd5(String oldstr)
            throws NoSuchAlgorithmException, UnsupportedEncodingException {

        MessageDigest md5 = MessageDigest.getInstance("MD5");
        Base64 base64en = new Base64();
        String md5Str = base64en.encodeToString(md5.digest(oldstr
                .getBytes("utf-8")));
        return md5Str;
    }

}
