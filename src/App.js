
import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
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
      <BrowserRouter>
        <div className="App">      
          <Navbar/>      
    
          <Routes>
              {/*<Titulo titulo={tit} subTit={subTit}/>      */}
              {/*<FormContainer/>      */}      
              <Route path='/' element={<ItemListContainer greeting ='Hola, soy una prop'/>} />
              <Route path='/categorias/:categoriaId' element={<ItemListContainer greeting ='Hola, soy una prop'/>} />
              <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>} />
              <Route path='/cart' element={<Cart/>} />
              
              <Route path='/*' element={<Navigate to ='/' replace/>} />
          </Routes>

        </div>      
      </BrowserRouter>    
  );
}

export default App;
