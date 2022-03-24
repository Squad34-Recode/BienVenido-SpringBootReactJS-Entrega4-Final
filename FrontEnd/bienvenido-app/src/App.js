import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import ScrollToTop from './components/generalComponents/ScrollToTop';
import Footer from './components/generalComponents/Footer';
import Header from './components/generalComponents/Header';
import Navbar from './components/generalComponents/NavBar';
import { ToastContainer } from 'react-toastify';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Work from './pages/work';
import List from './pages/list';
import Direitos from './pagesBootstrap/Direitos';
import Saude from './pagesBootstrap/Saude';
import Educacao from './pagesBootstrap/Educacao';
import Cultura from './pagesBootstrap/Cultura';
import Capitais from './pagesBootstrap/Capitais';
import Culinaria from './pagesBootstrap/Culinaria';
import Trabalhos from './pagesBootstrap/Trabalhos';
import Transporte from './pagesBootstrap/Transporte';
import Telefones from './pagesBootstrap/Telefones';
import Emergencia from './pagesBootstrap/Emergencia';
import Moradia from './pagesBootstrap/Moradia';
import Documentacao from './pagesBootstrap/Documentacao';
import Legislacao from './pagesBootstrap/Legislacao';
import Moeda from './pagesBootstrap/Moeda';
import Clima from './pagesBootstrap/Clima';
import Biomas from './pagesBootstrap/Biomas';
import Trivia from './pagesBootstrap/Trivia';
import Governo from './pagesBootstrap/Governo';

import './styles/GlobalStyle.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>

  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/contact' exact element={<Contact />} />
            <Route path='/about' exact element={<About />} />
            <Route path='/work' exact element={<Work />} />
            <Route path='/list' exact element={<List />} />
            <Route path="/edit-contato/:id" element={<Contact />} />

            <Route path='/direitos' exact element={<Direitos />} />
            <Route path='/saude' exact element={<Saude />} />
            <Route path='/educacao' exact element={<Educacao />} />
            <Route path='/cultura' exact element={<Cultura />} />
            <Route path='/capitais' exact element={<Capitais />} />
            <Route path='/culinaria' exact element={<Culinaria />} />
            <Route path='/trabalhos' exact element={<Trabalhos />} />
            <Route path='/transporte' exact element={<Transporte />} />
            <Route path='/telefones' exact element={<Telefones />} />
            <Route path='/emergencia' exact element={<Emergencia />} />
            <Route path='/moradia' exact element={<Moradia />} />
            <Route path='/documentacao' exact element={<Documentacao />} />
            <Route path='/legislacao' exact element={<Legislacao />} />
            <Route path='/moeda' exact element={<Moeda />} />
            <Route path='/clima' exact element={<Clima />} />
            <Route path='/biomas' exact element={<Biomas />} />
            <Route path='/trivia' exact element={<Trivia />} />
            <Route path='/governo' exact element={<Governo />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </Router>

      <ToastContainer />
    </div>
  );
}

export default App; 