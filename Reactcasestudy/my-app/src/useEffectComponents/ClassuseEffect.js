import React,{Component} from 'react'

class ClassuseEffect extends Component{
    constructor(props){
        super(props)
        this.state={count:0}
    }

    componentDidMount(){
        console.log('mounted')
        document.title=`Clicked ${this.state.count} times`

    }
    componentDidUpdate(prevProps,prevState){
        console.log('updated')
        document.title=`Clicked ${this.state.count} times`
    }

    render(){
        return(
            <div>
                <button onClick={()=>this.setState({count:this.state.count+1})}>Click{this.state.count}</button>
            </div>
        )
    }
}
export default ClassuseEffect
