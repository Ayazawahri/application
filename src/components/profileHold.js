import * as React from 'react';

export default class  Profile extends React.Component{
    
constructor(props){
    super(props)
}


componentDidMount(){
      try{

        fetch("http://localhost:8080/api/users/"+this.props.data.id+"/logs" ,{
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
          
        });
    
      }).then(() => console.log(this.state));
      }catch (error) {
        console.log(error);
        console.log('Fetch failed!');
      }
      }
      
      
  render(){
    return(
        <div>
            <table>
            <h1> My profile </h1>
            <tr >
                  <td> id:</td>
                  <td > {this.props.data.id}</td>
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
            <tr>
                <td> password:</td>
                  <td> {this.props.data.post}</td>
            </tr>
            </table>

        </div>
        
    
        );
  }
   
   
}
