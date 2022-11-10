import * as React from 'react';
import Histogram from './Histogram';
import PieChart from './PieChart';
import Scatter from './Scatter';




export default class AllData extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleData = this.props.handleData.bind(this);

  
  }

  

handleChange(event) {
  const value = event.target.value;
  const name = event.target.getAttribute('name');
  console.log(name + ": " + value)
  this.handleData(name,value);
}

 

  render() {
    let d="";
    if(this.props.data.choice==="1"){
      d = <Histogram/>
    }else if (this.props.data.choice==="2"){
      d = <Scatter/>
    }else if (this.props.data.choice==="3"){
      d = <PieChart/>
    }else{
      d= " type 1, 2 or 3"
    }

    return (
      <div>
        <div> 
          <h6>  For Histogram: type "1" <br/> Scatter: type "2" <br/> PieChart: type "3" </h6> 
          <tr>
            <td> Type of diagram : </td>
          <input type= "text" value={this.props.data.choice} name ={'choice'} onChange={this.handleChange}/>
          </tr>
          
        </div>
       {d}

      </div>
    )

  }

}
