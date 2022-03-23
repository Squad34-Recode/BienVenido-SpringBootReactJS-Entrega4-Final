package com.bienvenido.ApiBienVenido.controller;


import com.bienvenido.ApiBienVenido.exception.ResourceNotFoundException;
import com.bienvenido.ApiBienVenido.model.Formulario;
import com.bienvenido.ApiBienVenido.repository.FormularioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")   //conecta o reat ao java,mesmo sendo de portas diferentes
@RestController
@RequestMapping ("/api/v1/formularios")
public class FormularioController {

    @Autowired
    private FormularioRepository formularioRepository;

    @GetMapping
    public List<Formulario> getAllFormularios(){

        return formularioRepository.findAll();
    }

    //Criação do formulário no REST API
    @PostMapping
    public Formulario createFormulario(@RequestBody Formulario formulario){
        return formularioRepository.save(formulario);
    }

    //Buscar o formulário pelo ID REST API
    @GetMapping("{id}")
    public ResponseEntity<Formulario>getFormularioById(@PathVariable long id){
        Formulario formulario = formularioRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Formulario não existe no sistema com o id: "+id));
        return ResponseEntity.ok(formulario);
    }

    //Atualizando o formulario REST API
    @PutMapping("{id}")
    public ResponseEntity<Formulario> updateFormulario(@PathVariable long id, @RequestBody Formulario formularioDetails) {

     Formulario updateFormulario = formularioRepository.findById(id)
           .orElseThrow(() -> new ResourceNotFoundException("Não existe formulário com o id: "+id));

     updateFormulario.setNomeCompleto(formularioDetails.getNomeCompleto());
     updateFormulario.setEmailId(formularioDetails.getEmailId());
     updateFormulario.setTelefoneId(formularioDetails.getTelefoneId());
     updateFormulario.setMensagemId(formularioDetails.getMensagemId());

     formularioRepository.save(updateFormulario);

     return ResponseEntity.ok(updateFormulario);
    }

    // DELETANDO O FORMULÁRIO NO REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteFormulario(@PathVariable long id){

        Formulario formulario = formularioRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: " + id));

        formularioRepository.delete(formulario);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
