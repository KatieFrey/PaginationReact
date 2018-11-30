import "./Modal.css";
import React from "react";

class Modal extends React.Component {
  render() {
    if (this.props.show === false) {
      return null;
    }

    return (
      <div className="modal-overlay" onClick={this.props.onClick}>
        <div className="modal-body">
          <a className="modal-close" href="#" onClick={this.props.onClick}>
            X
          </a>

          <img src={this.props.url} />
        </div>
      </div>
    );
  }
}
export default Modal;
