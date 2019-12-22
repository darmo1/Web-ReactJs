import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Layout from './components/Layout'
import Search from './components/Search'
import Principal from './components/Principal'


function App(){
    return(

        <BrowserRouter>
            <Layout>
                <Switch> 
                  <Route exact path="/"  component={Principal} />    
                  <Route exact path="/hola"  component={Search} />
                </Switch>
            </Layout>

        </BrowserRouter>
    )

}



export default App;