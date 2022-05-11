import CartWidget from "./CartWidget/CartWidget"



function Navbar(){
    return(
     //<button classNameName='btn btn-primary'>Prueba boton</button>
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img class="imagen-NavBar" src="logo.jpg" alt="logoVegan"  ></img>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Nuestros Locales</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Platos a base de Semillas</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Menu Ejecutivo</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Bebidas
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href="#">Bebidas sin Alcohol</a></li>
                            <li><a className="dropdown-item" href="#">Cervezas</a></li>
                            <li><a className="dropdown-item" href="#">Bebidas Espirituosas</a></li>
                        </ul>
                        </li>
                    </ul>
                </div>
                <CartWidget/>  
                

            </div>
            </nav>                   
        </div>
    )
}

export default Navbar 