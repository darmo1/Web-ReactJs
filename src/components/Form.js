import React from 'react'

class Form extends React.Component{
    render(){
        return(
            <form>
                <div className="form-group">
                    <label>¿Que Character quieres buscar HOY?</label>
                    <input type="text"  onChange={this.props.onChange}  className="form-control " name="Search-word"  placeholder="Example Ricky"/>
                 </div>
                 <button className="btn btn-danger" onClick={this.props.onClick}> Search</button>
            </form>

        )
    }
}

export default Form;