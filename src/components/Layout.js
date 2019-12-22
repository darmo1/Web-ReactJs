import React from 'react'
import Hero from '../components/Hero'
import '../style/Body.css'

function Layout({children}){
    return(
        <React.Fragment>   
            <Hero />
             {children}
        </React.Fragment>

    )
}

export default Layout;