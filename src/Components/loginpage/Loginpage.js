import React from 'react'
import {Link} from 'react-router-dom'
import './Loginpage.css'

function Loginpage() {
    return (
        <div>
            <form className="hospform">
                <h1 className="head">Enter 
                 Service Code</h1>
                <input className="inputspace" type="password" name="pin"  minlength="8"  /><br/>
                

                <Link to='/Plogin'className="stbtn" >Submit</Link>

            </form>
        </div>
    )
}

export default Loginpage
