import React, { Component } from 'react';

class Keys extends Component{

executefunction=(event)=>{
this.props.onClick(event.target.value)

if(this.props.value==="c") 
this.props.onClick("")

}

 
render(){
    return(
    <input type={this.props.name} className="btn" value={this.props.value} onClick={this.executefunction}></input>
    );
}

}
export default Keys;