package com.example.Bienvenidoapp.service;

import com.example.Bienvenidoapp.model.Form;
import com.example.Bienvenidoapp.repository.FormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FormServiceImplementation implements FormService {

    @Autowired                                      // Cria o vínculo automático entre o Repositório e o Serviço da Classe/Tabela Form.
    private FormRepository formRepository;

    @Override
    public Form saveForm(Form form) {
        return formRepository.save(form);
    }

    @Override
    public List<Form> getAllForms() {
        return formRepository.findAll();
    }

    @Override
    public Form getForm(Integer id) {
        return formRepository.getById(id);
    }

    @Override
    public void deleteForm(Integer id) {
        formRepository.deleteById(id);
    }
}
