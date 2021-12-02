import React, { Fragment } from 'react'
import Welcome from './Welcome';
import Loginpage from './loginpage/Loginpage';
import Patientlogin from './PatientloginPage/PatientLogin'
import  {BrowserRouter as Router,Route,Routes} from'react-router-dom'
import Hospital from './Hospital/Hospital'
import Account from './Accountdetails/Account';
import Compile from './compiling/Compile'
import Clear from './Close/close'

function router() {
    return (
     <Router> '
        <Fragment>
          <Routes>
            <Route exact path='/' element={<Welcome/>}/>
            <Route exact path='/login' element={<Loginpage/>}/>
            <Route exact path='/Plogin' element={<Patientlogin/>}/>
            <Route exact path='/Hospital' element={<Hospital/>}/>
            <Route exact path='/Account' element={<Account/>}/>
            <Route exact path='/Compile' element={<Compile/>}/>
            <Route exact path='/Clear' element={<Clear/>}/>

          </Routes>
        </Fragment>  
      </Router>
    )
}

export default router
