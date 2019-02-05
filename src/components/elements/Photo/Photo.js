import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const StyledPhoto = styled.div`
  overflow: hidden;
  width: 100%;
  /* box-shadow: ${p => p.theme.shadow[1]}; */

  ${p =>
    p.rounded &&
    css`
      border-radius: 1000em;
      width: 100%;
      height: 100%;
    `}

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: ${p =>
      (p.variant === "contain" && "contain") ||
      (p.variant === "cover" && "cover")};
  }
`;

export class Photo extends Component {
  static propTypes = {
    as: PropTypes.string,
    variant: PropTypes.string
  };

  static defaultProps = {
    variant: "cover"
  };

  render() {
    return <StyledPhoto {...this.props}>{this.props.children}</StyledPhoto>;
  }
}

export default Photo;
