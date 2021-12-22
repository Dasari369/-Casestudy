import React,{Component} from 'react'

class ProductComponent  extends Component {
    render(){
        return(
            <div>
               <h2>{this.props.name}</h2> 
               <h2>{this.props.price}</h2>
               <h2>{this.props.children}</h2>
            </div>
        );
    }
}
export default ProductComponent;