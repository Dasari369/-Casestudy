import React,{Component} from 'react';
import axios from 'axios';

class GetTask extends Component{
    constructor(){
        super()
        this.state={
            taskname:''
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        axios.get('http://localhost:8080/api/tasks/111')
        .then(response => this.setState({taskname:response.data.tname}))
    }
    render(){
        return(
            <div>
                <button className='button' onClick={this.handleClick}>Click Me</button>
                <p>{this.state.taskname}</p>
            </div>
        )
    }
}
export default GetTask;