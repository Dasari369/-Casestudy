import React,{Component} from "react";


class StudentComponent  extends Component {
    render(){
        return(
            <div>
               <h2>Student ID:{this.props.id}</h2> 
               <h2>Student Name:{this.props.name}</h2>
               <h2>Student Marks:{this.props.marks}</h2>
            </div>
        );
    }
}
export default StudentComponent;