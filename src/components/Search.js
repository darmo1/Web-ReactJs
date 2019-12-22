import React from 'react'
import {Link} from 'react-router-dom'
import CharacterCard from './CharacterCard'

class Search extends React.Component{
    state={
        info:{},
        nextPage:1,
        loading:true,
        error:null,
        data:{
            results:[]
        }
        
    }

    handleChange = e => {
        this.setState({
            info:{
                [e.target.name]:e.target.value,
            }
        })
    }

    handleClick= (e)=>{
        e.preventDefault()
        console.log(this.state.info)
    }
    
    componentDidMount(){
        this.fetchMovies();
    }

    fetchMovies = async () => {
        this.setState({loading:true, error:null});
        
        try{
            const response = await fetch('https://rickandmortyapi.com/api/character?page=' + this.state.nextPage)
            const data = await response.json();
            this.setState({loading:false, error:false, data:data, nextPage:this.state.nextPage+1, })
        }
        catch(error){
            this.setState({loading:false, error:error})
        }
    };


    
    render(){
        if(this.state.error){
            return `Error :${this.state.error.message} `
        }

    

        return(
        <React.Fragment>
            <div className="jumbotron">
                <p className="text-center text-success display-4">Bienvenido al buscador de personajes de Rick & Morty</p>
                <Link to="/"><button className="btn btn-outline-danger btn-lg btn-block">Regresar</button></Link>
            </div>
            <div> <ul className="row">
                {this.state.data.results.map(character=>(
                    <div className="m-3" key={character.id}> 
                        <CharacterCard character={character.image} nombre={character.name} />
                     </div>
                ))}
                </ul>

                {this.state.loading && (
                    <div className="row">
                    ...LOADING
                    </div>
                )}

                {!this.state.loading && (
                     <button onClick={()=>this.fetchMovies()} className="btn btn-danger btn-lg btn-block">Load More Characters</button>

                ) }</div>
                </React.Fragment>


        )
    }
}


export default Search;