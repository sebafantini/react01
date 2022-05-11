
import './App.css';
import Formulario from './components/Formulario/Formulario';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Titulo from './components/Titulo/Titulo';



function App() {
  console.log('Hola')
  const estilos = {fontSize : 10}
  const nombre = 'sebas'
  const tit = 'Soy el titulo de App'
  return (
    <div className="App">      
      <Navbar/>      
      <Titulo titulo={titulo=tit}/>
      <Formulario/>
    </div>
  );
}

export default App;
