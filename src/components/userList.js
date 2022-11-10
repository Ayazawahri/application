import * as React from 'react';
import {Container, Paper,Button} from '@mui/material';
import { BrowserRouter as Router, Route,Link, Routes} from "react-router-dom";
import LogList from './LogList';
import PopupForm from './PopupForm';



export default class UserList extends React.Component{
    constructor(props){
        super(props);
        this.state={users:[]};
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

      
    handleClick=(e, i)=>{
        e.preventDefault();
        try{
            fetch("http://localhost:8080/api/users/" +i+"/dms",{
              mode: 'no-cors',
            method: "PUT", 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': 'http://localhost:8080',
            },
            body:JSON.stringify({
              message: this.props.data.message,
           
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

   

    componentDidMount(){
        try{
          fetch("http://localhost:8080/api/users/",{
           // mode: 'no-cors',
            method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:8080',
          },
        }).then( res=>{
            if(!res.ok){
                throw new Error("HTTP status " + res.status);
            }
            return res.json();
        })
        .then((result)=>{
          console.log("result "+ result);
          this.setState({
            users:result
            /*users:[
                ...this.state.users,
                result
            ]*/
            
          })
        }).then(() => console.log(this.state.users));
        }catch (error) {
          console.log(error);
          console.log('Fetch failed!');
        }
        }


       

       

  render(){

    return(
        <div>
            <table>
            <h1> All users </h1>
        <div>
        
         {this.state.users.map(user=>(
            <Paper elevation={10} style={{margin:"10px",padding:"30px", textAlign:"left", width:600}} key={user.id}>
            The username: &nbsp;{user.name}<br/>
        
          <Router>
            <div>
                <Link to ="/LogList">LogList</Link>
            </div>
            <Routes>
            <Route  path="/LogList" element={<LogList id={user.id}/>} />
            </Routes>
          
          </Router>

          <tr>
               <td>type a message: </td>
               <input type="text" value={this.props.data.message} name ={'message'} onChange={this.handleChange} />
            </tr>
            
            <tr>
              <button onClick={(event)=> this.handleClick(event, user.id)} >Send</button>
            </tr>        
            
            </Paper>
            ))}

        </div>
     </table>
        </div>
        
    )

  }
      
}