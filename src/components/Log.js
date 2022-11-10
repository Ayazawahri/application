import * as React from 'react';
import {Container, Paper,Button} from '@mui/material';

export default class Log extends React.Component{
    constructor(props){
        super(props);
        //this.state={ logs:[]};
        
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
            fetch("http://localhost:8080/api/users/" +this.props.data.id+"/logs",{
              method: "Post", 
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body:JSON.stringify({
               post: this.props.data.post,
              
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
        const paperStyle1={ margin:"70px 100px"}
    return (
      <Container>
         
          <Paper elevation={3} style={paperStyle}>
              <h2 style={{color:"red", textAlign:"center"}}> Create a new post</h2>
          <form>
            <tr>
              
               <textArea  style={paperStyle1} type="text" rows="10" cols="50" value={this.props.data.post} name ={'post'} onChange={this.handleChange} />
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

 

    
    



