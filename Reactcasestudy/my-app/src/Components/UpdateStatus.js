import React, { Component } from "react";
import TaskService from "../services/TaskService";
import Home from '../Components/HomeComponent';

class UpdateStatus extends Component{

    constructor(props) {
        super(props)

        this.state = {
        taskID:'',
        status:'',
        task:''
        
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
        TaskService.setStatus(this.state.taskID,this.state.status)
        .then(response => {
            console.log(response)
            this.setState({task:response.data})
        })
        .catch(error =>{
           console.log(error)
       })
    }

    render(){
        const{taskID,status,task} = this.state
        return(
            <div>
                <Home></Home>
                 <h2 style={{textAlign:"center"}}>Update Status</h2>
                <form onSubmit={this.submitHandler} style={{textAlign:"center"}}>
                <div>
                        Task ID:
                        <input type="number"
                        name="taskID"
                        value={taskID}
                        onChange={this.changeHandler}
                        />
                    </div>
                    <div>
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
                    
                <button type="submit">Submit</button>
                
                   
                </form>
                <div>
                <ul>
                    <li>TaskID: {task.taskID}</li> 
                    <li>TaskName: {task.tname}</li>
                    <li>TaskOwner: {task.ownerID}</li>
                    <li>Task CreatorID: {task.creatorID}</li>
                    <li>Task status: {task.status}</li>
                    <li>Description:  {task.desc}</li>
                    <li>notes:  {task.notes}</li>
                    <li>statusChangedOn:  {task.statusChangedOn}</li>
                    <li>Priority:  {task.priority}</li>
                    <li>bookMarked  {task.bookMarked===true?"true":"false"}</li>
                    <li> createdon:  {task.createdon}</li>
                    </ul>
            </div>
            </div>
        )
    
    }

    
}

export default UpdateStatus
