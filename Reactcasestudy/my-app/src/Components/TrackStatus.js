import React, { Component } from "react";
import TaskService from "../services/TaskService";
import Home from '../Components/HomeComponent';

class TrackStatus extends Component{

    constructor(props) {
        super(props)

        this.state = {
        status:'',
        tasks:[]
        
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
        TaskService.SearchByStatus(this.state.status)
        .then(response => {
            console.log(response)
            this.setState({tasks:response.data})
        })
        .catch(error =>{
           console.log(error)
       })
    }

    render(){
        const{status} = this.state
        return(
            <div>
                <Home></Home>
                <h2 style={{textAlign:"center"}}>Track Status</h2>
                <form onSubmit={this.submitHandler} >
                <div style={{textAlign:"center"}}>
                    Status:
                    <select
                    name="status"
                    value={status}
                    onChange={this.changeHandler}
                    >
                        <option value="Close">Close</option>
                        <option value="Cancelled">Cancelled</option>
                        <option value="InProgress">InProgress</option>
                        <option value="OnHold">OnHold</option>
                        </select>
                    
                    </div>
                
                    
                <p  style={{textAlign:"center"}}><button type="submit">Search</button></p>
                
                <div>
                {this.state.tasks.map(task =>(<ul>
                    <li>TaskID:{task.taskID}</li> 
                    <li>TaskName:{task.tname}</li>
                    <li>TaskOwner:{task.ownerID}</li>
                    <li>Task CreatorID:{task.creatorID}</li>
                    <li>Task status:{task.status}</li>
                    <li>Description:{task.desc}</li>
                    <li>notes:{task.notes}</li>
                    <li>statusChangedOn:{task.statusChangedOn}</li>
                    <li>Priority:{task.priority}</li>
                    <li>bookMarked:{task.bookMarked.toString()}</li>
                    <li> createdon:{task.createdon}</li>
                    </ul>))}
            </div>
                
                   
                </form>
            </div>
        )
    
    }

    
}

export default TrackStatus