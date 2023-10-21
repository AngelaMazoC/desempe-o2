import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Footer from './Components/Footer';
import Sites from './Components/Sites';
import './App.css';
//  Se importan los componentes para visualizar


function App() {
  return (
    <div className="App">
      {/* Retorna cada componente y se visualiza */}
      <Home/>
      <About/>
      <Services/>
      <Sites/>
      <Footer/>
    </div>
  );
}

export default App;
