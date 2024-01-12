import './style.css'
import Sidebar from '../sidebar/index'
import { useEffect } from 'react';

const homePage = () =>{

    return(
        <> 
            <Sidebar /> 
            <main className='mainHomePage'>
                <h1>Bem vindo, Home</h1>
            </main>
            
        </>
    )
}

export default homePage;