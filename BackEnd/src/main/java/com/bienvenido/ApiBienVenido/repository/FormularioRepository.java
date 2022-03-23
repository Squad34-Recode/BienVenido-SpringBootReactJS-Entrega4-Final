package com.bienvenido.ApiBienVenido.repository;

import com.bienvenido.ApiBienVenido.model.Formulario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface FormularioRepository extends JpaRepository <Formulario,Long> {
    //Todos os métodos do banco de dados Bruto (CRUD)
}
