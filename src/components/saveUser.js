import * as React from 'react';
import {Container, Paper,Button} from '@mui/material';

 


export default class User  extends React.Component{

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

    /*componentDidMount(){
      try{

        fetch("http://localhost:8080/api/get/"+this.props.data.name ,{
          mode: 'no-cors',
          method: 'GET',
        headers: {
          'Accept': 'application/json'
        },
      }).then(res=>res.json())
      .then((result)=>{
        console.log("result "+ result);
        this.setState({
          ...this.state,
         id: result.id
          
        });
    
      }).then(() => console.log(this.state));
      }catch (error) {
        console.log(error);
        console.log('Fetch failed!');
      }
      }
      */
      
      
    handleClick=(e)=>{
        e.preventDefault();
        try{
          fetch("http://localhost:8080/api/users",{
            method: "Post", 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body:JSON.stringify({
             id: this.props.setId(this.props.aID),
             name: this.props.data.name,
             email: this.props.data.email,
             password: this.props.data.password
            
            }),
       }).then(function(res){
         if (res.ok) {
           alert('Creation successful!');
          
           console.log("New user added");
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
              <h1 style={{color:"red"}}> New User</h1>
          <form>
          <tr >
                  <td> id</td>
                  <td > {this.props.data.id}</td>
                </tr>
            <tr>
               <td>name: </td>
               <input type="text" value={this.props.data.name} name ={'name'} onChange={this.handleChange} />
            </tr>
            <tr>
               <td>email: </td>
               <input type="text" value={this.props.data.email} name ={'email'}onChange={this.handleChange}/>
            </tr>
            <tr>
               <td>password: </td>
               < input type="text" value={this.props.data.password} name={'password'} onChange={this.handleChange}/>
            </tr>
          
            <tr>
              <button onClick={this.handleClick} >Save</button>
            </tr>
      </form> 
      </Paper>
      <div>
            <table>
            <h1> My profile </h1>
            <tr >
                  <td> id:</td>
                  <td > </td>
                </tr>
              
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
    
      </Container>
    );
  }

  
}
