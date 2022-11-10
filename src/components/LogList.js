import * as React from 'react';
import {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import {Container, Paper,Button} from '@mui/material';
import Log from './Log';

export default class LogList extends React.Component{
    constructor(props){
        super(props);
        this.state={ logs:[]};
        
    }

    componentDidMount(){
        try{
  
          fetch("http://localhost:8080/api/users/"+this.props.id+"/logs" ,{
           // mode: 'no-cors',
            method: 'GET',
          headers: {
            'Accept': 'application/json'
          },
        }).then( res=>res.json())
        .then((result)=>{
          console.log("result "+ result);
          this.setState({
           logs:result
            
          })
        }).then(() => console.log(this.state.logs));
        }catch (error) {
          console.log(error);
          console.log('Fetch failed!');
        }
        }

  render(){

    const currentURL = window.location.href // returns the absolute URL of a page

     const pathname = window.location.pathname //returns the current url minus the domain name

    const paperStyle={padding: '50px 20px', width:600, margin:"20px auto"}
    return(
        <div>
            <table>
            <h4>The posts:  </h4>
        <div>
        <paper elevation={3} style={paperStyle}>
         {this.state.logs.map(log=>(
            <Paper elevation={10} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={log.id}>
            {log.post}<br/>

            </Paper>
            ))}
        </paper>

        </div>
     </table>
        </div>
        
    )

  }
      
}