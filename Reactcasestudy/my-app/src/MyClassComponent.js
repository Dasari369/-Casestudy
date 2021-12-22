import React,{Component} from "react";

class MyClassComponent extends Component{
    render(){
        var myStyle={
            fontSize:100,
            color:'#FF0000'
        }
        return(<div>
            <h1 style={myStyle}>Header</h1>
            <header style={myStyle} />
            <footer style={myStyle} />
        </div>);
    }
}
export default MyClassComponent;