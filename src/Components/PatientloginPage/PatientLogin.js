import React from 'react'
import {Link} from 'react-router-dom'
import './patient.css'

function PatientLogin() {
    return (
        <div>
            <form className="hospform">
                 <h1 className="head">Enter Patients Code</h1>
                <input className="inputspace" type="password" name="pin"  minlength="8"  /><br/>
                <Link to='/Account'className="mtbtn" >Submit</Link>
            </form>

        </div>
    )
}

export default PatientLogin
