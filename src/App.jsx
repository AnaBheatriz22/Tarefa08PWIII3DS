import './App.css'
import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import Empresa from './components/pages/Empresa';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/empresa" element= {<Empresa/>}/>
      <Route path="/contato" element= {<Contato/>}/>
      </Routes>
      <Footer/>
    </>
  )

}


export default App
