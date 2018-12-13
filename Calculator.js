import React, { Component } from 'react';
import Keys from './Keys';
import './Calculator.css';
import UpdateDeleteContainer from './UpdateDeleteContainer';


class Calculator extends Component{
    state={
        screen:"",
        afterEquals:false,
        row:[],
        result:[],
        id:'',
        editOperation:false,
        keyOperation:false
    };

    editScreen=(i,a)=>{
                this.setState({editOperation:true})
                this.setState({id:i})
                this.setState({screen:a})
                this.setState({afterEquals:false})
                console.log(this.state.row[0])
    }

    deleteScreen=(i,a)=>{
        
         this.setState({id:i})
         this.state.row.splice(this.state.id,1);
    }
    
    display=(a)=>{
        
       if(this.state.afterEquals===false){  
        if(a===""){ 
        this.setState({screen: this.state.screen.substring(0, ((this.state.screen).length) - 1)})
        console.log(this.state.screen.length)
    }
        else if(a==="="){
        if(this.state.editOperation===false){
        this.setState({screen:eval(this.state.screen)})
        this.setState({afterEquals:true})
        this.state.row.push((this.state.screen));
        this.state.result.push(eval((this.state.screen)));
        this.setState({keyOperation:true})
    }
        else if(this.state.editOperation===true){
          this.state.row[this.state.id]=this.state.screen
          this.setState({screen:eval(this.state.screen)})
          this.setState({afterEquals:true})
          this.setState({editOperation:false})
          this.setState({keyOperation:true})
         
        }
        
    }
        else{
        this.setState({screen:this.state.screen+a}) 
        }
       }
       else{
        this.setState({screen:a,afterEquals:false})
        }
        
    }



//     changeEvent=(event)=>{
//         if(this.state.keyOperation===false){
//     this.setState({screen:event.target.value})
    
//     }
//    else if(event){
//     var x= (this.state.screen).toString()
//     var y=x.substring(x.length)
//     this.setState({screen:y+event.target.value})
//     this.setState({keyOperation:false}) 
//    }
// }

keyEvent=(event)=>{
    console.log(event.key)
    if(!isNaN(event.key)||event.key==="+"||event.key==="/"||event.key==="*"||event.key==="-"){
        if(this.state.keyOperation===false)
        this.setState({screen:this.state.screen+event.key})
        else
        this.setState({screen:event.key})
        this.setState({keyOperation:false})
    }
    else if (event.key==="Enter"){
        this.setState({screen:eval(this.state.screen)});
        this.setState({hi:true})
        this.state.row.push((this.state.screen));
        this.state.result.push(eval((this.state.screen)));
        this.setState({keyOperation:true})
}


}

render() {
    return (
    <div className="CalculatorContainer">
        
        <div>
        <input type="text" className="screen" value={this.state.screen} onKeyPress={(event)=>this.keyEvent(event)}></input>
        
            <Keys name="button" value="1" onClick={this.display}></Keys>
            <Keys name="button" value="2" onClick={this.display}></Keys>
            <Keys name="button" value="3" onClick={this.display}></Keys>
            <Keys name="button" value="4" onClick={this.display}></Keys>
            <Keys name="button" value="5" onClick={this.display}></Keys>
            <Keys name="button" value="6" onClick={this.display}></Keys>
            <Keys name="button" value="7" onClick={this.display}></Keys>
            <Keys name="button" value="8" onClick={this.display}></Keys>
            <Keys name="button" value="9" onClick={this.display}></Keys>
            <Keys name="button" value="0" onClick={this.display}></Keys>    
            <Keys name="button" value="+" onClick={this.display}></Keys>
            <Keys name="button" value="-" onClick={this.display}></Keys>
            <Keys name="button" value="*" onClick={this.display}></Keys>
            <Keys name="button" value="/" onClick={this.display}></Keys>
            <Keys name="button" value="=" onClick={this.display}></Keys>
            <Keys name="button" value="c" onClick={this.display}></Keys>
            </div>
            
           <UpdateDeleteContainer input={this.state.row}  display={this.editScreen} removeDisplay={this.deleteScreen}/>
       
            </div>
    );
}
}
export default Calculator;