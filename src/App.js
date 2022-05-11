
import './App.css';
import CartWidget from './components/CartWidget/CartWidget';
import FormContainer from './components/ComponenteContenedor/FormContainer';
import Formulario from './components/Formulario/Formulario';

import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar';
import Titulo from './components/Titulo/Titulo';



function App() {
  console.log('Hola')
  const estilos = {fontSize : 10}
  const nombre = 'sebas'
  const tit = 'Soy el titulo de App'
  const subTit = 'Soy el subtit de App'

  return (
    <div className="App">      
      <Navbar/>      
      <Titulo titulo={tit} subTit={subTit}/>
      <FormContainer/>
      <ItemListContainer greeting ='Hola, soy una prop'/>
    </div>
  );
}

export default App;
