package org.dl.tengrui.common;

import org.dl.tengrui.dao.UserDao;
import org.springframework.beans.factory.support.DefaultListableBeanFactory;
import org.springframework.beans.factory.xml.XmlBeanDefinitionReader;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

public class SpringConfig {

    private static DefaultListableBeanFactory factory;

    private static DefaultListableBeanFactory getFactory() {

        if (factory == null) {

            Resource rs = new ClassPathResource("wms-context.xml");

            factory = new DefaultListableBeanFactory();
            XmlBeanDefinitionReader reader = new XmlBeanDefinitionReader(
                    factory);
            reader.loadBeanDefinitions(rs);
        }
        return factory;
    }

    public static UserDao getUserDao() {
        return (UserDao) getFactory().getBean("userdao");
    }
    
}
