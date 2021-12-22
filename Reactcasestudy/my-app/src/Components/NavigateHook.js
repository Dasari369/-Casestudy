import React from "react";
import {useNavigate} from 'react-router-dom'
import LoginComponent from "./LoginComponent";

function WithNavigate(props) {
    let navigate = useNavigate();
    return <LoginComponent {...props} navigate={navigate} />
    
}
export default WithNavigate()

