
import logo from '../logo.svg';
function Header(){
    return(
        <header className="App-header" style={{fontSize : 10}}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          
        </p>
        <p>
          <button onClick={()=>console.log('Que tal?')}>Hola..</button>
        </p>
        <p style={{fontSize: 50}}>
         SEBAS DESDE FUNCTION 
          <button className='btn btn-primary'>Prueba boton</button>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>



    )

  }
export default Header