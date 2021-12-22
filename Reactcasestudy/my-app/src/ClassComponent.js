import React,{Component} from 'react'

class ClassComponent extends Component {
    render(){
        return(
            <div>
                {this.props.name}
                {this.props.age}
            </div>
        );
    }
}
export default ClassComponent;