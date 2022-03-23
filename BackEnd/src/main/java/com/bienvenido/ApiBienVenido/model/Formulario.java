package com.bienvenido.ApiBienVenido.model;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="formularios")
public class Formulario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name= "nome_completo")
    private String nomeCompleto;

    @Column(name= "email_id")
    private String emailId;

    @Column(name= "telefone_id")
    private String telefoneId;

    @Column(name= "mensagem_id")
    private String mensagemId;

}
