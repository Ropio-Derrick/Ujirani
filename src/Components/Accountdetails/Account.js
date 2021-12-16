import React from 'react'
import {Link} from 'react-router-dom'
import './Account.css'

function Account() {
    return (
        <div className="Container">
            <h1 className="Heads">Account info</h1>
            <hr/>
            <div className="info2">
                <div className="info">
                    <div className="Personalinfo">
                        <div>
                            <h1 className="values">Name:</h1>
                            <h1 className="value">******* ***** *****</h1>
                        </div>
                        <div>
                            <h1 className="values">Id No:</h1>
                            <h1 className="value">******* ***** *****</h1>
                        </div>
                        <div>
                            <h1 className="values">Contacts:</h1>
                            <h1 className="value">******* ***** *****</h1>
                        </div>

                    </div>
                    <div className="photo">
                        <img src="data:image/jpeg;base64,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"/>
                    </div>
                </div>
                <div className="status">
                    <h1  className="Head"> Account Status</h1>
                    <hr/>
                    <div className="statusinfo">
                        {/* <div className="statuscheck"> 
                            <div className="statuscheck1">
                                <h1 className="name">Account Allocation</h1>
                                <h1 className="figure">10,000ksh</h1>
                            </div>
                            <div className="statuscheck2">
                               <h1 className="name">Account Balance</h1>
                                <h1 className="figure">7,000ksh</h1>
                            </div>
                        </div> */}
                        <div className="Active">
                            <span className="display" >
                                Active
                            </span>
        
                            <Link to='/Compile'className="smttext" >Next </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account
