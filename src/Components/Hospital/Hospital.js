import React from 'react'
import {Link} from 'react-router-dom'
import '../loginpage/Loginpage.css'

function Hospital() {
  
    return (
    <form className="hospform">
        <h1 className="head">Enter 
         Hospital Code</h1>
        <input className="inputspace" type="password" name="pin"  minlength="8" required/><br/>
        
        <Link to='/login'  className="stbtn" >Submit</Link>

    </form>

    )
}

export default Hospital
