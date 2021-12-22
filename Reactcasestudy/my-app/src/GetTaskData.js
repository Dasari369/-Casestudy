import React,{Component} from 'react';
import axios from 'axios';
import Home from './Components/HomeComponent';

class GetTaskData extends Component{
    constructor(props){
        super(props)
        this.state={
            tasks:[]
        }
      
    }
    componentDidMount(){
        axios.get('http://localhost:8080/api/tasks')
        .then(response => this.setState({tasks:response.data}))
    }
    
    render(){
        return(
            <div>
                <Home></Home>
            <h2 className="text-center"> Task List</h2>
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
export default GetTaskData;