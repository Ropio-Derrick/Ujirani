import React from 'react'
import {Link} from 'react-router-dom'
import './styles/opener.css'

function Welcome() {
    return (  

        <div className='container'>
            <div className="welcomehead">
               <h1 className="headtag">
                   Lets 
                   Get<br/>
                   Started
               </h1>
                <Link to='/Hospital' className="openbtn" >Start</Link>
            </div>
            <div className='dre'>
                <div className='image' />
            </div>

       </div>
    )
}

export default Welcome
