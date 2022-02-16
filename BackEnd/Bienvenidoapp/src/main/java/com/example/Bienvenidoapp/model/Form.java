package com.example.Bienvenidoapp.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.sun.istack.NotNull;

import javax.persistence.*;

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity                                                     // Identifica a classe como Entidade/Tabela SQL
public class Form {

    @Id                                                     // Identifica como Primary Key
    @GeneratedValue(strategy = GenerationType.IDENTITY)     // Ativa o AutoIncrement para o id
    @Column(name = "idform")                             // Define o nome do atributo
    private int id;

    @NotNull
    private String nome, email, contato, mensagem;

    public Form() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getContato() {
        return contato;
    }

    public void setContato(String contato) {
        this.contato = contato;
    }

    public String getMensagem() {
        return mensagem;
    }

    public void setMensagem(String mensagem) {
        this.mensagem = mensagem;
    }
}
