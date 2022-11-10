import * as React from 'react';
import {Container, Paper,Button} from '@mui/material';

export default class  Profile extends React.Component{
    
constructor(props){
    super(props);
   
}

      
      
  render(){
    const paperStyle={padding: '50px 20px', width:600, margin:"20px auto"}
    return(
      <Container>
          <Paper elevation={3} style={paperStyle}>
        <div>
            <table>
            <h2> My profile </h2>
            <tr >
                  <td> name:</td>
                  <td > {this.props.data.name}</td>
            </tr>
            <tr>
                <td> email:</td>
                  <td> {this.props.data.email}</td>
            </tr>
            <tr>
                <td> password:</td>
                  <td> {this.props.data.password}</td>
            </tr>
           
            </table>

        </div>
        </Paper>
        </Container>
        
    
        );
  }
   
   
}
