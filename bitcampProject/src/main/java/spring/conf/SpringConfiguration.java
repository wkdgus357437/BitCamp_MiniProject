package spring.conf;

import org.apache.commons.dbcp2.BasicDataSource;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.io.ClassPathResource;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@PropertySource("classpath:spring/db.properties")
@EnableTransactionManagement
public class SpringConfiguration { 
	
	private @Value("${jdbc.driver}") String driver;
	private @Value("${jdbc.url}") String url;	
	private @Value("${jdbc.username}") String username;	
	private @Value("${jdbc.password}") String password;
	
	@Bean
	public BasicDataSource dataSource() {
		BasicDataSource basicDataSource = new BasicDataSource();
		basicDataSource.setDriverClassName(driver);
		basicDataSource.setUrl(url);
		basicDataSource.setUsername(username);
		basicDataSource.setPassword(password);
		
		return basicDataSource;
	}
	
	@Bean
	public SqlSessionFactory sqlSessionFactory() throws Exception {
		SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();

		sqlSessionFactoryBean.setConfigLocation(new ClassPathResource("spring/mybatis-config.xml")); //Resource타입을 원하기 때문. classPath를 알려준다.

		sqlSessionFactoryBean.setDataSource(this.dataSource()); //basicDataSource return해준다.
		sqlSessionFactoryBean.setMapperLocations(new ClassPathResource("com/menu/dao/menuMapper.xml"),
												 new ClassPathResource("com/store/dao/StoreMapper.xml"),
												 new ClassPathResource("com/admin/dao/AdminMapper.xml"),
												 new ClassPathResource("com/order/dao/orderMapper.xml"),
												 new ClassPathResource("com/event/dao/EventMapper.xml"),
												 new ClassPathResource("com/member/dao/memberMapper.xml"));
		
		return sqlSessionFactoryBean.getObject(); //SqlSessionFactory로 return하기 위해서 
	}
	
	@Bean
	public SqlSessionTemplate sqlSession() throws Exception {
		SqlSessionTemplate sqlSessionTemplate = new SqlSessionTemplate(sqlSessionFactory());
		return sqlSessionTemplate;
	}
	
	@Bean
	public DataSourceTransactionManager transactionManager() {
		return new DataSourceTransactionManager(dataSource());
	}

}


/*
@Bean (메소드 위에 써준다)  
- return 되는 클래스를 빈으로 생성한다. 
- 반드시 메소드의 이름은 id명으로 설정해야 한다. 
 */
