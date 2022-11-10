import React, {Component} from 'react';
import {Container, Paper,Button} from '@mui/material';


export default class MessageForm extends React.Component{
    constructor(props){
        super(props);
             
    this.handleChange = this.handleChange.bind(this);
    this.handleClick= this.handleClick.bind(this);
    this.handleData = this.props.handleData.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        const name = event.target.getAttribute('name');
        //console.log(name + ": " + value)
        this.handleData(name,value);
      }


      handleClick=(e)=>{
        e.preventDefault();
        try{
          fetch("http://localhost:8080/api/users/" +this.props.message.id+"/dms",{
            method: "Post", 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body:JSON.stringify({
             message: this.props.message.message,
            
            }),
       }).then(function(res){
         if (res.ok) {
           alert('Creation successful!');
          
           console.log("New New log added");
         }else {
           alert('Something went wrong!');
       }
     });
        }catch (error) {
          console.log(error);
          console.log('Fetch failed!');
        }
      
  }

    render(){
        const paperStyle={padding: '50px 20px', width:600, margin:"20px auto"}
    return (
      <Container>
         
          <Paper elevation={3} style={paperStyle}>
              <h1 style={{color:"red"}}> send a message </h1>
          <form>
            <tr>
               <td> type the message: </td>
               <input type="text" value={this.props.message} name ={'post'} onChange={this.handleChange} />
            </tr>
            <tr>
              <button onClick={this.handleClick} >Save</button>
            </tr>
            
      </form> 
      </Paper>
      

    
      </Container>
    );
    
  }
}
