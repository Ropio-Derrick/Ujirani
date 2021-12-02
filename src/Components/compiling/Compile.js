import React from 'react'
import './Compiling.css'    
import Drugs from './drugs'
import Dashboard from './dashboard'

function Compile() {
    return (
        <div className="Container1">
            <h1 className="title">MEDICATION & BILLING INFO</h1>
            <div className="flex">
                <Drugs/>
                <Dashboard/>
            </div>
        </div>
    )
}

export default Compile
