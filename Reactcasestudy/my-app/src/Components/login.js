import React from "react";
import {useNavigate} from "react-router-dom"
import { useState } from "react";
import TaskService from "../services/TaskService";

function Redirect() {
    let navigate = useNavigate();
    
    const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");

  
  function handleSubmit(event) {
    event.preventDefault();
        TaskService.login(userName,password)
        .then(response => {
            console.log(response)
           if(response.data === true)
           {
              alert("Login successful");
              navigate('/home')
              
              
            }
            else{
                alert("please enter valid username and password");
                navigate('/log')
            }
        })
        .catch(error =>{
           console.log(error)
       })
    
  }

    return (
      <div>

        

        <div className="Login">
        <h2 style={{textAlign:"center"}}>Login</h2>
        
      <form onSubmit={handleSubmit} style={{textAlign:"center"}}>
      <fieldset>
                     <div>
                        UserName:
                        <input type="text"
                        name="userName"
                        value={userName}
                        onChange={(e) => setuserName(e.target.value)}
                        />
                    </div>
                    <div>
                        Password:
                        <input type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Login</button>
            
         
        
                    </fieldset>
       
        </form>
       
     
    </div>
    </div>
  );
}
     
       
   
  
  export default Redirect