package org.dl.tengrui.common;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;


public class PropUtil {

	private static final String default_http_prop_path = "/wms.properties";
	private static final String SYSTEM_EXCEL_TEMPLATE_PATH;
	
	static {
		
		Properties httpProp = getClassHttpProperties();	
	
		SYSTEM_EXCEL_TEMPLATE_PATH = httpProp.getProperty("sys.template.excel.path");
	}
	
	/**
	 * @return the systemExcelTemplatePath
	 */
	public static String getSystemExcelTemplatePath() {
		return SYSTEM_EXCEL_TEMPLATE_PATH;
	}

	private static Properties getClassHttpProperties() {
		ClassLoader cl = null;
		try {
			cl = Thread.currentThread().getContextClassLoader();
		} catch (Throwable ex) {
			// Cannot access thread context ClassLoader - falling back to system
			// class loader...
		}
		if (cl == null) {
			// No thread context class loader -> use class loader of this class.
			cl = PropUtil.class.getClassLoader();
		}
		Properties prop = new Properties();
		InputStream is = cl.getResourceAsStream(default_http_prop_path);
		if (is == null) {
			is = cl.getClass().getResourceAsStream(default_http_prop_path);
		}
		if (is == null) {
			return prop;
		}
 		try {
			prop.load(is);
		} catch (IOException e) {
			return prop;
		}
		return prop;
	}
	
}
