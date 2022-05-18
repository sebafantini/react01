
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CartWidget from './components/CartWidget/CartWidget';
import FormContainer from './components/ComponenteContenedor/FormContainer';
import Formulario from './components/Formulario/Formulario';

import Header from './components/Header';
import Item from './components/Item/Item';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemList from './components/ItemList/ItemList';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar';
import Titulo from './components/Titulo/Titulo';



function App() {
  
  const estilos = {fontSize : 10}
  const nombre = 'sebas'
  const tit = 'Soy el titulo de App'
  const subTit = 'Soy el subtit de App'
  
  
  const [count, setCount] =useState(0);
  const [bool, setBool] =useState(true);
  const [fecha, setFecha] =useState(Date());



  function contador() {
    //count++;
    setCount(count+1);
    setFecha(Date());
    //console.log(count);
    
  }

  return (
    
    
      <div className="App">      
        <Navbar/>      
        
            
            
            <Titulo titulo={tit} subTit={subTit}/>      
            <FormContainer/>      
            <ItemListContainer greeting ='Hola, soy una prop'/>
            <ItemDetailContainer/>
        
      </div>
    
  );
}

export default App;
