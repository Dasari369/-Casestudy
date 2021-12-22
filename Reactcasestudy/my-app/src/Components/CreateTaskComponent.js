import React, { Component } from "react";
import TaskService from "../services/TaskService";
import Home from '../Components/HomeComponent';

class CreateTaskComponent extends Component{
    constructor(props){
        super(props)
    this.state ={
        taskID:'',
        ownerID:'',
        creatorID:'',
        tname:'',
        status:'',
        desc:'',
        priority:'',
        notes:'',
        statusChangedOn:'',
        bookMarked:'',
        createdon:''
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
    TaskService.createTask(this.state).then(response => {
        console.log(response)
    })
    .catch(error =>{
       console.log(error)
   })

   
}

render(){
    const{taskID,ownerID,creatorID,tname,status,desc,priority,notes,statusChangedOn,bookMarked,createdon} = this.state
    return(
        <div style={{textAlign:"center"}}>
            <Home></Home>
            <h2>Create Task</h2>
            <form onSubmit={this.submitHandler}>
                <div>
                    TaskID:
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

                <div>
                    Creator ID:
                    <input type="number"
                    name="creatorID"
                    value={creatorID}
                    onChange={this.changeHandler}
                    />
                    </div>
                    <div>
                    Task name:
                    <input type="text"
                    name="tname"
                    value={tname}
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

                    <div>
                    Description:
                    <input type="text"
                    name="desc"
                    value={desc}
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
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                        </select>
                    
                    </div>
                    <div>
                    Notes:
                    <input type="text"
                    name="notes"
                    value={notes}
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
                        <option value="true">true</option>
                        <option value="false">false</option>
                        </select>
                    
                    </div>

                    <div>
                    CreatedOn:
                    <input type="date"
                    name="createdon"
                    value={createdon}
                    onChange={this.changeHandler}
                    />
                    </div>

                    <div>
                    statusChangedOn:
                    <input type="date"
                    name="statusChangedOn"
                    value={statusChangedOn}
                    onChange={this.changeHandler}
                    />
                    </div>


                    
                <button type="submit">Submit</button>
               
            </form>
        </div>
    )

}
}
export default CreateTaskComponent