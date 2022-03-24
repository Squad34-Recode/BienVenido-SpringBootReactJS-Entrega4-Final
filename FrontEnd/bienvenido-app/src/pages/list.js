import React, {useState, useEffect} from 'react';
import ContatoService from "../services/ContatoService";
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify';
import Container from 'react-bootstrap/Container';
import '../styles/pagesBootstrap.css';


const List = () => {

  const [contatos, setContatos] = useState([])

  useEffect(() => {

      getAllContatos();
 }, [])

  const getAllContatos = () => {
      ContatoService.getAllContatos().then((response) => {
          setContatos(response.data)
          console.log(response.data);
      }).catch(error =>{
          console.log(error);
      })
  }

  
  const deleteContato = (contatoId) =>{
      ContatoService.deleteContato(contatoId).then((response)=>{
      toast.success("¡Mensaje eliminado con éxito!!")
      getAllContatos();

      }).catch(error=>{
          console.log(error);
      })
      //console.log(formularioId);
  }

  return (
    <Container className='container-reactBootstrap' fluid='md'>
          <table className="table-usuarios">
            <caption>LISTAGEM DE CONTATOS</caption>
              <thead>
                  <th> Id </th>
                  <th> Nome completo</th>
                  <th> Email </th>
                  <th> Telefone </th>
                  <th> Mensagem</th>
                  <th> Ações </th>
              </thead>
              <tbody>
                  {
                      contatos.map(
                          contato =>
                          <tr key = {contato.id}> 
                              <td> {contato.id} </td>
                              <td> {contato.nomeCompleto} </td>
                              <td>{contato.emailId}</td>
                              <td>{contato.telefoneId}</td>
                              <td>{contato.mensagemId}</td>
                              <td>
                              <Link className="editar" to={`/edit-contato/${contato.id}`} >Editar</Link>
                              <button className = "btn btn-danger" onClick = {() => deleteContato(contato.id)}
                                  style = {{marginLeft:"10px"}}> Deletar</button>  
                              </td>
                          </tr>
                      )

                  }
              </tbody>
          </table>
          <br/>
          </Container>
  )
}


export default List;