import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Sidebar } from "../components/compounds";

export default class SidebarContainer extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <Sidebar
        content={this.props.sidebarContent}
        handleMenuClick={this.props.handleMenuClick}
      />
    );
  }
}
