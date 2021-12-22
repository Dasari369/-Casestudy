import React, { Component } from "react";
import TaskService from "../services/TaskService";
import Home from '../Components/HomeComponent';



class DeleteTask extends Component{

    constructor(props) {
        super(props)

        this.state = {
        taskID:'',
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
        TaskService.deleteTask(this.state.taskID)
        .then(response => {
            console.log(response)
            this.setState({tasks:response.data})
        })
        .catch(error =>{
           console.log(error)
       })
    }

    render(){
        const{taskID} = this.state
        return(
            <div>
                <Home></Home>
                <h2 style={{textAlign:"center"}}>Delete task</h2>
                <form onSubmit={this.submitHandler} style={{textAlign:"center"}}>
                <div>
                        Task ID:
                        <input type="number"
                        name="taskID"
                        value={taskID}
                        onChange={this.changeHandler}
                        />
                    </div>
                    
                <button type="submit">Delete</button>
               
                </form>

                <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                 <th>TaskID</th>
                                 <th>Name</th>
                                 <th>OwnerID</th>   
                                 <th>CreatorID</th>    
                                 <th>Status</th>   
                                 <th>Description</th>  
                                 <th>Priority</th>
                                 <th>Notes</th>
                                 <th>BookMarked</th>
                                 <th>Created</th>
                                 <th>Status Changed</th>
                                </tr>
                            </thead>
                            <tbody>
                {this.state.tasks.map(task =>(<tr key={task.taskID}>
                    <td>{task.taskID}</td> 
                    <td>{task.tname}</td>
                    <td>{task.ownerID}</td>
                    <td>{task.creatorID}</td>
                    <td>{task.status}</td>
                    <td>{task.desc}</td>
                    <td>{task.priority}</td>
                    <td>{task.notes}</td>
                    <td>{task.bookMarked.toString()}</td>
                    <td>{task.createdon}</td>
                    <td>{task.statusChangedOn}</td>
                   
                   
                   
                   
                    </tr>))}
                    </tbody>
                        </table>

                 </div>
                </div>
                
                   
               
        )
    
    }
}

    


export default DeleteTask