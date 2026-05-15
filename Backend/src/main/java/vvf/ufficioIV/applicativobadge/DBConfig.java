package vvf.ufficioIV.applicativobadge;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import jakarta.servlet.ServletContext;

public class DBConfig {
    private static Properties props;

    public static Properties get(ServletContext ctx) throws IOException {
        if (props == null) {
            props = new Properties();
            try (InputStream is = ctx.getResourceAsStream("/WEB-INF/db.properties")) {
                props.load(is);
            }
        }
        return props;
    }
}