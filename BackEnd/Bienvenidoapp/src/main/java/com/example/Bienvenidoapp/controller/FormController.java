package com.example.Bienvenidoapp.controller;

import com.example.Bienvenidoapp.model.Form;
import com.example.Bienvenidoapp.service.FormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController                                                                 // Aciona o Controller e Response Body que troca dados em JSON e/ou XML.
@RequestMapping("/form")                                                        // Mapeia os Responses para os métodos do Controller.
//@CrossOrigin(origins = "*")                                                   // Permite que ocorra CORS (Compartilhamento de recursos com origens diferentes) de aplicações diferentes via HTTP/S. (Ex.: Um POST via React)
public class FormController {

    @Autowired
    private FormService formService;

    @PostMapping("/add")                                                        // Mapeia os Requests de HTTP POST (CREATE) para os métodos locais.
    public String add(@RequestBody Form form) {
        formService.saveForm(form);
        return "<h1>Um novo Form foi adicionado !</h1>";
    }

    @GetMapping("/getAll")                                                      // Mapeia os Requests de HTTP GET (READ) para os métodos locais.
    public List<Form> getAllForms() {
        return formService.getAllForms();
    }

    @GetMapping("/{id}")                                                        // Mapeia os Requests de HTTP GET (READ) por id para os métodos locais.
    public ResponseEntity<Form> get(@PathVariable Integer id) {
        try {                                                                   // Bloco try - Situação onde o id de form é encontrado
            Form form = formService.getForm(id);
            return new ResponseEntity<Form>(form, HttpStatus.OK);

        } catch (NoSuchElementException e) {                                    // Bloco catch - Situação de exceção onde o id não é encontrado.
            return new ResponseEntity<Form>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Form> update(@RequestBody Form form,                  // Mapeia os Requests de HTTP PUT (UPDATE) por id para os métodos locais.
                                          @PathVariable Integer id) {
        try {                                                                   // Bloco try - Situação onde o id de form é encontrado
            Form existingForm = formService.getForm(id);
            formService.saveForm(form);
            return new ResponseEntity<Form>(HttpStatus.OK);

        } catch (NoSuchElementException e){                                     // Bloco catch - Situação de exceção onde o id não é encontrado.
            return new ResponseEntity<Form>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete/{id}")                                              // Mapeia os Requests de HTTP DELETE (DELETE) por id para os métodos locais.
    public String delete(@PathVariable Integer id){
        formService.deleteForm(id);
        return "<h1>Form de id " + id + " deletado !</h1>";
    }

}
