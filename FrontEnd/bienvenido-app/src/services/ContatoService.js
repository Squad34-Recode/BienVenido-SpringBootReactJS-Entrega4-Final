import axios from 'axios'

const CONTATO_BASE_REST_API_URL = "https://bienvenidoapp-backend.herokuapp.com/api/v1/formularios";

class ContatoService {

  getAllContatos() {
    return axios.get(CONTATO_BASE_REST_API_URL)
  }

  createContato(contato) {
    return axios.post(CONTATO_BASE_REST_API_URL, contato)
  }

  getContatoById(contatoId) {
    return axios.get(CONTATO_BASE_REST_API_URL + '/' + contatoId)
  }


  updateContato(contatoId, contato) {
    return axios.put(CONTATO_BASE_REST_API_URL + '/' + contatoId, contato)
  }

  deleteContato(contatoId) {
    return axios.delete(CONTATO_BASE_REST_API_URL + '/' + contatoId)
  }

}
export default new ContatoService();