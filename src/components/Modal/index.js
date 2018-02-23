import React, {Component, PureComponent} from 'react';
import './style.css';

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const body = this.props.modalIsOpen && this.props.title
    return (
      <div class="modal-window">
        {body}
      </div>
    )
  }
}



export default Modal;
