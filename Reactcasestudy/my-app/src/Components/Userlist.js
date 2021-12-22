import React,{Component} from 'react';
//import TaskService from '../services/TaskService';
import axios from 'axios';
import Home from '../Components/HomeComponent';

class Userlist extends Component{
    constructor(props){
        super(props)
        this.state={
            users:[]
        }
      
    }
    componentDidMount(){
        axios.get('http://localhost:8080/api/users')
        .then(response => this.setState({users:response.data}))
    }
    
    render(){
        return(
            <div>
                <Home></Home>
            <h2 className="text-center"> User List</h2>
            <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                  <th>UserID</th>
                                  <th>UserName</th>
                                  <th>FirstName</th>   
                                  <th>lastName</th>    
                                  <th>Email</th>   
                                  <th>Contact</th>  
                                  <th>Role</th>
                                  <th>Is Active</th>
                                  <th>Date Of Birth</th>
                                  <th>Created On</th>
                                </tr>
                            </thead>
                            <tbody>
                {this.state.users.map(user =>(<tr key={user.userID}>
                    <td>{user.userID}</td> 
                    <td>{user.userName}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.contactNumber}</td>
                    <td>{user.role}</td>
                    <td>{user.active.toString()}</td>
                    <td>{user.dOB}</td>
                    <td>{user.createdOn}</td>
                   
                   
                   
                   
                    </tr>))}
                    </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}
export default Userlist;