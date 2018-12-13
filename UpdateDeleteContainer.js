import React, { Component } from 'react';
import Keys from './Keys';
import './Calculator.css';
import Calculator from './Calculator';
class UpdateDeleteContainer extends Component{
    render(){
      // console.log(this.props)        
        return(
        <div>
        <table id="fff">
        <thead>
            <tr>
               <th>Inputs</th><th>Result</th><th>Process</th>
            </tr>
       </thead>
       <tbody>
       {this.props.input.map((rowInput,i)=>{
           
             return (
                 
                <tr>
                    <td>{rowInput}</td>
                    <td>{eval(rowInput)}</td>
                    <td><button className="btn1" onClick={()=>this.props.display(i,rowInput)}>edit</button>
                    <button className="btn2" onClick={()=>this.props.removeDisplay(i,rowInput)}>delete</button></td>
                    </tr>
             );
            
         })
        }
        </tbody>
       </table>
        </div>
         ); 
        }
    
}
export default UpdateDeleteContainer;