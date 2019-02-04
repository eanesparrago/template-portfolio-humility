import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Modal } from "../components/compounds";

export default class ModalContainer extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <Modal
        id={this.props.id}
        onDismiss={this.props.onDismiss}
        content={this.props.content}
      />
    );
  }
}
