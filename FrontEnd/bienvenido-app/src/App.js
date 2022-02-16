import React from 'react';
import './styles/GlobalStyle.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/generalCompoents/Footer'
import Header from './components/generalCompoents/Header';
import Index from './pages/index';
import Contact from './pages/contact';
import About from './pages/about';
import Work from './pages/work';
import Derechos from './pagesBootstrap/Derechos';
import Cultura from './pagesBootstrap/Cultura';
import Transporte from './pagesBootstrap/Transporte';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Index />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/work' exact element={<Work />} />

          <Route path='/derechos' exact element={<Derechos />} />
          <Route path='/cultura' exact element={<Cultura />} />
          <Route path='/transporte' exact element={<Transporte />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
//, Route, Routes 
{/* <Router>
<h1>Hello! Word.</h1>
<teste />

</Router> */}