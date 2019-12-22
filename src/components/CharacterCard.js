import React from 'react'

class CharacterCard extends React.Component{
    render(){
     return(
        <div className="card" Style="width: 18rem;">
            <img src={this.props.character} className="card-img-top" alt="nombre" />
            <div className="card-body">
                <p className="card-text"> {this.props.nombre} </p>
            </div>
            </div>

    )
} 
}
export default CharacterCard; 