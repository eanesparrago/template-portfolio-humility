import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Spring, Trail, Transition } from "react-spring";
import { Item, Box, Container, Area } from "../../layout";
import { Button, Typography, Photo } from "../../elements";

const StyledNavStatusBar = styled.div`
  /* border: 1px solid magenta; */
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: none;
  background-color: ${p =>
    (p.content === "Projects" && p.theme.color.primary.dark) ||
    (p.content === "Skills" && p.theme.color.dark) ||
    (p.content === "About Me" && p.theme.color.primary.dark)};
  transition-duration: 300ms;

  .item-text {
    /* border: 1px solid magenta; */
    /* transform: rotate(-90deg); */
    /* font-weight: 700; */
    font-family: ${p => p.theme.font.serif};
    color: ${p => p.theme.color.light};
    font-size: ${p => p.theme.font.scale.h2};
    text-transform: uppercase;
    text-orientation: upright;
    writing-mode: vertical-rl;
    user-select: none;
  }
`;

class NavStatusBar extends Component {
  static propTypes = {
    content: PropTypes.string
  };

  static defaultProps = {
    content: "Projects"
  };

  render() {
    const { content } = this.props;

    return (
      <StyledNavStatusBar content={content}>
        <Item name="text">
          <Typography>{content}</Typography>
        </Item>
      </StyledNavStatusBar>
    );
  }
}

export default NavStatusBar;
