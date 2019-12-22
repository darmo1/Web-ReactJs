import React from 'react'
import Logo from '../images/logo.svg'


class Hero extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row bg-secondary">
                    <img src={Logo} alt="Este el el logo de mi Website" />
                </div>
            </div>
        )
    }
}


export default Hero;