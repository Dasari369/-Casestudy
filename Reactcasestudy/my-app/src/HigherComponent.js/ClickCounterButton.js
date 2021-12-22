import React,{Component} from 'react';
import UpdatedComponent from './withCounter';

class ClickCounterButtton extends Component{

    render(){
        const {count,incrementCount}=this.props
        return <button onClick={incrementCount}>Clicked {count} times</button>
    }
}
export default UpdatedComponent(ClickCounterButtton )