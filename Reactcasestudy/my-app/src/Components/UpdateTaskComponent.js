import React, { Component } from "react";
import TaskService from "../services/TaskService";
import Home from '../Components/HomeComponent';

class UpdateTaskComponent extends Component{

    constructor(props) {
        super(props)

        this.state = {
        taskID:'',
        bookMarked:0,
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
        TaskService.AddBookMark(this.state.taskID,this.state.bookMarked).then(response => {
            console.log(response)
            this.setState({task:response.data})
        })
        .catch(error =>{
           console.log(error)
       })
    }

    render(){
        const{taskID,bookMarked} = this.state
        return(
            <div>
                <Home></Home>
                <h2 style={{textAlign:"center"}}>Add BookMark</h2>
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
                    BookMark:
                    <select
                    name="bookMarked"
                    value={bookMarked}
                    onChange={this.changeHandler}
                    >
                        <option value="1">true</option>
                        <option value="0">false</option>
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

export default UpdateTaskComponent


  
        