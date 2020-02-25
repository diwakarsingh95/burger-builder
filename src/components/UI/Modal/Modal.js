import React, { Component } from "react";

import styles from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  componentDidUpdate() {
    console.log("[Modal] componentDidUpdate");
  }

  render() {
    const style = {
      transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
      opacity: this.props.show ? "1" : "0"
    };
    return (
      <React.Fragment>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div className={styles.Modal} style={style}>
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
