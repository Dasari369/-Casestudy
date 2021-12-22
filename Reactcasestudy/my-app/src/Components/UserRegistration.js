import React, { Component } from "react";
import TaskService from "../services/TaskService";
import Home from '../Components/HomeComponent';

class UserRegistration extends Component{
    constructor(props){
        super(props)
    this.state ={
        userID:'',
        userName:'',
        password:'',
        email :'',
        firstName:'',
        lastName:'',
        contactNumber:'',
        role:'',
        active:'',
        dOB:'',
        createdOn:''
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
    TaskService.createUser(this.state).then(response => {
        console.log(response)
    })
    .catch(error =>{
       console.log(error)
   })

   
}

render(){
    const{userID,userName,password,email,firstName,lastName,contactNumber,role,active,dOB,createdOn} = this.state
    return(
        <div>
            <Home></Home>
            <h2 style={{textAlign:"center"}}>Register User</h2>
            <form onSubmit={this.submitHandler}  style={{textAlign:"center"}}>
                <div>
                    UserID:
                    <input type="number"
                    name="userID"
                    value={userID}
                    onChange={this.changeHandler}
                    />
                </div>
                <br></br>
                <div>
                    User Name:
                    <input type="text"
                    name="userName"
                    value={userName}
                    onChange={this.changeHandler}
                    />
                </div>
                <br></br>
                <div>
                    Password:
                    <input type="password"
                    name="password"
                    value={password}
                    onChange={this.changeHandler}
                    />
                    </div>
                    <br></br>
                    <div>
                   Email:
                    <input type="email"
                    name="email"
                    value={email}
                    onChange={this.changeHandler}
                    />
                    </div>
                    <br></br>
                    <div>
                   First Name:
                    <input type="text"
                    name="firstName"
                    value={firstName}
                    onChange={this.changeHandler}
                    />
                    </div>
                    <br></br>
                    

                    <div>
                    Last Name:
                    <input type="text"
                    name="lastName"
                    value={lastName}
                    onChange={this.changeHandler}
                    />
                    </div>
                    <br></br>

                    <div>
                    Contact:
                    <input type="number"
                    name="contactNumber"
                    value={contactNumber}
                    onChange={this.changeHandler}
                    />
                    </div>
                    <br></br>

                    
                    <div>
                    Role:
                    <input type="text"
                    name="role"
                    value={role}
                    onChange={this.changeHandler}
                    />
                    </div>
                    <br></br>
                    <div>
                    Active:
                    <select
                    name="active"
                    value={active}
                    onChange={this.changeHandler}
                    >
                        <option value="true">true</option>
                        <option value="false">false</option>
                        </select>
                    
                    </div>
                    <br></br>

                    <div>
                    Date of Birth:
                    <input type="date"
                    name="dOB"
                    value={dOB}
                    onChange={this.changeHandler}
                    />
                    </div>
                    <br></br>
                    <div>
                    Created On:
                    <input type="date"
                    name="createdOn"
                    value={createdOn}
                    onChange={this.changeHandler}
                    />
                    </div>


                    
                <button type="submit">Submit</button>
               
            </form>
        </div>
    )

}
}
export default UserRegistration