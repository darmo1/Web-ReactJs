import React from 'react'
import {Link} from 'react-router-dom';
import '../style/Body.css'

import Brand from '../images/astronauts.svg'


class Principal extends React.Component{
    render(){
        return(
        <React.Fragment>
           <div className="row">
                <div className="col-6">
                    <img className="mt-5 ml-5 pt-5 pl-5" src={Brand} alt="LogoDos" />
                </div>
                <div className="col-6 d-flex  flex-column justify-content-center align-items-center ">
                    <h1 className="mt-5 text-center pb-5"> Bienvenido a la página para buscar los personajes de </h1>
                    <h1 class="display-1 mb-5 bg-warning">RICKY AND MORTY</h1>
                   
                        <Link to="/hola">  <button className="btn btn-danger btn-lg mt-5 ">¡ Ir a la búsqueda de personajes !</button> </Link>
                         
                </div>
                </div>
                <div className="row d-flex justify-content-center mt-5 text-white display-4" >
                    <p className=""> Made with ♥ by @ <a className="text-primary" href="https://twitter.com/darmo10"> darmo10 </a></p>
                </div>
        </React.Fragment>
            
        )
    }
}

export default Principal;