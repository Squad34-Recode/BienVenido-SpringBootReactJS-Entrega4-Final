package com.bienvenido.ApiBienVenido;

import com.bienvenido.ApiBienVenido.model.Formulario;
import com.bienvenido.ApiBienVenido.repository.FormularioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class ApiBienVenidoApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(ApiBienVenidoApplication.class, args);
	}

	// // Permite que ocorra CORS (Compartilhamento de recursos com origens diferentes) de aplicações diferentes via HTTP/S em toda aplicação. (Ex.: Um POST via React)
	@Bean
	public WebMvcConfigurer configure() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry reg) {
				reg.addMapping("/*").allowedOrigins("");
			}
		};

	}

	@Autowired
    private FormularioRepository formularioRepository;

	@Override
	public void run(String... args) throws Exception {  //adicionando manual no MySQL
	/*	Formulario formulario = new Formulario();
		formulario.setNomeCompleto("Diogo Ramalho");
		formulario.setEmailId("diogo@teste.com");
		formulario.setTelefoneId("31988855785");
		formulario.setMensagemId("Teste meu amigo!");
		formularioRepository.save(formulario);

		Formulario formulario1 = new Formulario();
		formulario1.setNomeCompleto("Camilla Ramalho");
		formulario1.setEmailId("camilla@teste.com");
		formulario1.setTelefoneId("3193333332");
		formulario1.setMensagemId("Funciona!");
		formularioRepository.save(formulario1); */
	}



}
