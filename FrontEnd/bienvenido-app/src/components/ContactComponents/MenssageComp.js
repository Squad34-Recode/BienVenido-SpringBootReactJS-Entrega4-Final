import React, { useEffect, useState } from 'react';
import contatamos from '../../images/contatanos (1).png';
import ContatoService from '../../services/ContatoService';
import {useParams} from 'react-router-dom'; 
import {toast} from 'react-toastify';

const MenssageComp = () => {
    const [nomeCompleto,setNomeCompleto] = useState('')
    const [emailId,setEmailId] = useState('')
    const [telefoneId,setTelefoneId] = useState('')
    const [mensagemId,setMensagemId] = useState('')
    //const navigate = useNavigate();    //Antes usava o comando useHistory
    const {id} = useParams();


     //adicionar  ou atualizar formulario
  const saveOrUpdateContato = (e) =>{
    e.preventDefault();
   
     const contato = {nomeCompleto, emailId, telefoneId, mensagemId}
   
   if(id){
     ContatoService.updateContato(id, contato).then((response) => {
      toast.success("¡Mensaje actualizado con éxito!")
  
   }).catch(error => {
       console.log(error)
   })
   }else{
     ContatoService.createContato(contato).then((response) =>{
      
       console.log(response.data)
       toast.success("¡Mensaje enviado correctamente!")
       //navigate('/')  //comando que volta a página de lista de formulario
   
     }).catch(error => {
       console.log(error)
     })
  
   }
   
    }
   
   
   //busca formulario para edita lo
   
   
   useEffect (() =>  {
   
     
   ContatoService.getContatoById(id).then((response) => {
   setNomeCompleto(response.data.nomeCompleto)
   setEmailId(response.data.emailId)
   setTelefoneId(response.data.telefoneId)
   setMensagemId(response.data.mensagemId)
   
  
   }).catch(error => {
     console.log(error)
   })
   },[])
 
   

    return (
        <section className="contact">
            <div className="row">
                <div className="image">
                    <img src={contatamos} alt="" />
                </div>

                <form id="contact-form" method="POST">
                    <h3>Mandanos un mensaje</h3>
                    
<input
                  type= "text"
                  placeholder= "Nombre"
                  name="nomeCompleto"
                  className="box"
                  value = {nomeCompleto}
                  onChange = {(e) => setNomeCompleto(e.target.value)}
                  >
                  </input>

<input
                  type= "email"
                  placeholder= "Email"
                  name="emailId"
                  className="box"
                  value = {emailId}
                  onChange = {(e) => setEmailId(e.target.value)}
                  >
                  </input>

                  <input
                  type= "text"
                  placeholder= "Telefone"
                  name="telefoneId"
                  className="box"
                  value = {telefoneId}
                  onChange = {(e) => setTelefoneId(e.target.value)}
                  >
                  </input>

                  <textarea
                  type= "text"
                  placeholder= "mensaje"
                  name="mensagemId"
                  cols="30"
                  rows="10"
                  className="box"
                  value = {mensagemId}
                  onChange = {(e) => setMensagemId(e.target.value)}
                  >
                  </textarea>
                  <button className="btn btn-primary" onClick={(e) => saveOrUpdateContato(e)}>Enviar mensaje</button>


                  




                </form>
            </div>
        </section>
    )
}

export default MenssageComp;