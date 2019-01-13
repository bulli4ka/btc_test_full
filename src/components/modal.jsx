import React, { Component } from 'react';
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      showModal: false
     }
  }
  handleShowModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    window.history.pushState("", document.title, window.location.pathname);
    this.setState({ showModal: false });
  };
  
  render() {
    const showHideClassName = this.state.showModal ? 'modal display-block' : 'modal display-none';
    return (
      <div className={showHideClassName}>
        <section className='modal-main'>
          <div className="modal_header">
            <h3 className="modal_header_title">{this.props.titleForModal}</h3>
            <button className="modal_close" onClick={this.hideModal}>
                
            </button>
          </div>
            {this.props.children}
        </section>
      </div>
    );
  }
}
 
export default Modal;