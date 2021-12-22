import React, { Component } from "react";
import TaskService from "../services/TaskService";
import Home from '../Components/HomeComponent';

class UpdatePriority extends Component{

    constructor(props) {
        super(props)

        this.state = {
        taskID:'',
        priority:'',
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
        TaskService.setPriority(this.state.taskID,this.state.priority).then(response => {
            console.log(response)
            this.setState({task:response.data})
        })
        .catch(error =>{
           console.log(error)
       })
    }

    render(){
        const{taskID,priority} = this.state
        return(
            <div>
                <Home></Home>
                <h2 style={{textAlign:"center"}}>Update Priority</h2>
                <form onSubmit={this.submitHandler}  style={{textAlign:"center"}}>
                <div>
                        Task ID:
                        <input type="number"
                        name="taskID"
                        value={taskID}
                        onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                    priority:
                    <select
                    name="priority"
                    value={priority}
                    onChange={this.changeHandler}
                    >
                        <option value="" disabled>choose</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                        </select>
                    
                    </div>
    
                    
                        
                 <button type="submit">Submit</button>
                   
                </form>

                <div>
               
                <ul>
                    <li>TaskID:{this.state.task.taskID}</li> 
                    <li>TaskName:{this.state.task.tname}</li>
                    <li>TaskOwner:{this.state.task.ownerID}</li>
                    <li>Task CreatorID:{this.state.task.creatorID}</li>
                    <li>Task status:{this.state.task.status}</li>
                    <li>Description:{this.state.task.desc}</li>
                    <li>notes:{this.state.task.notes}</li>
                    <li>statusChangedOn:{this.state.task.statusChangedOn}</li>
                    <li>Priority:{this.state.task.priority}</li>
                    <li>bookMarked:{this.state.task.bookMarked===true?"true":"false"}</li>
                    <li> createdon:{this.state.task.createdon}</li>
                    </ul>
            </div>
            </div>
            
        )
    
    }

    
}

export default UpdatePriority
