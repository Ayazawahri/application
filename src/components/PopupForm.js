import React, {Component} from 'react';
import Popup from 'reactjs-popup';
import MessageForm from './MessageForm';
//import Input from './Input';


class PopupForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Popup
            trigger={<button> Send a message </button>}
            modal
        >
          <span><MessageForm message={this.props.message}/></span>
        </Popup>
    );
  }

}

export default PopupForm;

