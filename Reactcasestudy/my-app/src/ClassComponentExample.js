import React,{Component} from 'react';
 import PropsExample from './PropsExample';
import ClassComponent from './ClassComponent';
import StudentComponent from './StudentComponent';
import ProductComponent from './ProductComponent';
import mobile from './images/mobile.jpg';

class ClassComponentExample extends Component{
    render(){
        return(
            <div>
                <h1>My Class Component</h1>
                <PropsExample name = "Bhargavi" age={21}>
                    <p>This is my child tag</p>
                </PropsExample>
                <PropsExample name="Devika" />
                <ClassComponent name="Gayathri" age={30}></ClassComponent>
                <h2>Student Details</h2>
                 <StudentComponent id={11} name="Devika"  marks={30}></StudentComponent>
                 <h3>Product Details</h3>
                 <ProductComponent name="Mobile" price={15000}>
                     <img src={mobile} width={300} height={400}></img>
                 </ProductComponent>
        </div>
        
            
        

        )
    }
    
}
export default ClassComponentExample;