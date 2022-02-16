package com.example.Bienvenidoapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class BienvenidoappApplication {

	public static void main(String[] args) {
		SpringApplication.run(BienvenidoappApplication.class, args);
	}

	// Permite que ocorra CORS (Compartilhamento de recursos com origens diferentes) de aplicações diferentes via HTTP/S em toda aplicação. (Ex.: Um POST via React)
	@Bean
	public WebMvcConfigurer configure() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry reg) {
				reg.addMapping("/**").allowedOrigins("*");
			}
		};
	}

}
