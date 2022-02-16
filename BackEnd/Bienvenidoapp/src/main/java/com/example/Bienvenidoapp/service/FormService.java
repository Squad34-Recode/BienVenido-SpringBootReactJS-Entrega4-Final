package com.example.Bienvenidoapp.service;

import com.example.Bienvenidoapp.model.Form;

import java.util.List;

public interface FormService {
    Form saveForm(Form form);
    List<Form> getAllForms();
    Form getForm(Integer id);
    void deleteForm(Integer id);
}
