import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './COMPONENTS/NavBar.js';
import Obtener_listado from './COMPONENTS/Obtener_listado.js';
import './App.css';

function App() {
  return (
    <>
      <NavBar/>
      <Obtener_listado/>
    </>
  );
}

export default App;
