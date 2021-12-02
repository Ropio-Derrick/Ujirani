import React from "react";
import {Link} from 'react-router-dom'
import './close.css'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
 
const Popup = props => {
  return (
    <div>
        <form className="clear">
             <h1 className="head4">Cleared</h1>
             < SentimentSatisfiedAltIcon  className="icon"/>
             <h1 className="head3">Thank You</h1>


            <Link to='/'className="mt1btn" >CLose</Link>
        </form>
    </div>
  );
};
 
export default Popup;