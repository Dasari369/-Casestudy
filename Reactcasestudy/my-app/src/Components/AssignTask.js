import React, { Component } from "react";
import TaskService from "../services/TaskService";
import Home from '../Components/HomeComponent';

class AssignTask extends Component{

    constructor(props) {
        super(props)

        this.state = {
        taskID:'',
        ownerID:'',
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
        TaskService.assignTask(this.state.taskID,this.state.ownerID)
        .then(response => {
            console.log(response)
            this.setState({task:response.data})
        })
        .catch(error =>{
           console.log(error)
       })
    }

    render(){
        const{taskID,ownerID} = this.state
        return(
            <div>
                <Home></Home>
                <h2 style={{textAlign:"center"}}> Assign Task</h2>
                <fieldset>
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
                        Owner ID:
                        <input type="number"
                        name="ownerID"
                        value={ownerID}
                        onChange={this.changeHandler}
                        />
                    </div>
                    
                <button type="submit">Submit</button>  
                </form>
                </fieldset>
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
                    <li>bookMarked:{this.state.task.bookMarked}</li>
                    <li> createdon:{this.state.task.createdon}</li>
                    </ul>
            </div>
                
            </div>
        )
    
    }

    
}

export default AssignTask