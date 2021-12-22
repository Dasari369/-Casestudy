import React, { Component } from "react";
import TaskService from "../services/TaskService";





class LoginComponent extends Component{
   
    constructor(props) {
        super(props)

        this.state = {
        userName:'',
        password:'',
        
        
        }
        this.changeHandler = this.changeHandler.bind(this);
       this.submitHandler=this.submitHandler.bind(this);
      
    }
    


    changeHandler(e){
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler(e){
      
       
         e.preventDefault()
        console.log(this.state)
        TaskService.login(this.state.userName,this.state.password)
        .then(response => {
            console.log(response)
           if(response.data === true)
           {
              alert("Login successful");
              
              
            }
            else{
                alert("please enter valid username and password");
            }
        })
        .catch(error =>{
           console.log(error)
       })
    }

    
    render(){
       

        const{userName,password} = this.state
        return(
            <div>
                <h2 style={{textAlign:"center"}}>Login</h2>
                <form onSubmit={this.submitHandler} style={{textAlign:"center"}}>
                <div>
                        UserName:
                        <input type="text"
                        name="userName"
                        value={userName}
                        onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        Password:
                        <input type="text"
                        name="password"
                        value={password}
                        onChange={this.changeHandler}
                        />
                    </div>
                
                    
                <button type="submit">Login</button>
                
                
                
                   
                </form>
            </div>
        )
    
    }

    
    
}

export default LoginComponent