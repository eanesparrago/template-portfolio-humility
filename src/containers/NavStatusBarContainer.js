import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { NavStatusBar } from "../components/compounds";

export default class NavStatusBarContainer extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return <NavStatusBar content={this.props.content} />;
  }
}
