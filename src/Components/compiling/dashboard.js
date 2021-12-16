import React from 'react'
import {Link} from 'react-router-dom'
import './Compiling.css'

function dashboard() {
    return (
        <div className="right">
            <div className="statuscheck"> 
                <div className="statuscheck1">
                    <h1 className="name1">Monthly Allocation</h1>
                    <h1 className="figure1">10,000ksh</h1>
                </div>
                <div className="statuscheck1">
                   <h1 className="name1">Account Balance</h1>
                    <h1 className="figure1">7,000ksh</h1>
                </div>
                <div className="statuscheck1">
                   <h1 className="name1">Grand Total</h1>
                    <h1 className="figure1">2,000ksh</h1>
                </div>
                <div className="statuscheck1">
                   <h1 className="name1">New Balance</h1>
                    <h1 className="figure2">3,000ksh</h1>
                
                </div>
                
                <Link to='/Clear'className="btn" margin="0px 10px 0px 0px">Submit</Link>

            
            </div>
        </div>
    )
}

export default dashboard
