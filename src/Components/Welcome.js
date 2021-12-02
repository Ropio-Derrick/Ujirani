import React from 'react'
import {Link} from 'react-router-dom'
import './styles/opener.css'

function Welcome() {
    return (

        <div className="headtag">
           <h1 className="headtag">
               Lets 
               Get<br/>
               Started
           </h1>
            <Link to='/Hospital' className="openbtn" >Start</Link>
        </div>

    )
}

export default Welcome
