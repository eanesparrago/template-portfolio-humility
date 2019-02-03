import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import textCrop from "../../utils/textCrop";

// p
// button
// caption
// subtitle
// h1
// h2
// h3

// "1em", // >>> 16px
// "1.1875em", // >>> 19px
// "1.5em", // >>> 24px
// "2em", // >>> 32px
// "3em", // >>> 48px
const StyledTypography = styled.span`
  /* ${textCrop()} */
  ${p => (p.as === "p" ? textCrop(p.theme.font.lineHeight) : textCrop())}

  font-family: ${p => (p.as === "h1" || p.as === "h3") && p.theme.font.serif};

  font-size: ${p =>
    (p.as === "h1" && p.theme.font.scale.h1) ||
    (p.as === "h2" && p.theme.font.scale.h2) ||
    (p.as === "h3" && p.theme.font.scale.h3) ||
    (p.as === "h4" && p.theme.font.scale.h4) ||
    (p.as === "p" && p.theme.font.scale.p) ||
    (p.variant === "caption" && p.theme.font.scale.base) ||
    (p.variant === "button" && p.theme.font.scale.base)};
  font-weight: ${p =>
    (p.as === "h3" && "700") ||
    (p.as === "h4" && "700") ||
    (p.variant === "button" && "700")};
  text-transform: ${p =>
    (p.variant === "button" || p.variant === "caption") && "uppercase"};
  letter-spacing: ${p =>
    (p.variant === "button" || p.variant === "caption") &&
    p.theme.font.letterSpacing};

  /* color:  ${p =>
    (p.as === "h1" || p.as === "h3") && p.theme.color.primary.dark}; */
  
`;

export class Typography extends Component {
  static propTypes = {
    as: PropTypes.string
  };

  render() {
    return (
      <StyledTypography {...this.props}>{this.props.children}</StyledTypography>
    );
  }
}

export default Typography;
