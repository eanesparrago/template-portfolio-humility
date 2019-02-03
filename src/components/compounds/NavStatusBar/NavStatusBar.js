import React, { Component } from "react";
import styled from "styled-components";
import { Spring, Trail, Transition } from "react-spring";
import { Item, Box, Container, Area } from "../../layout";
import { Button, Typography, Photo } from "../../elements";

const StyledNavStatusBar = styled.div`
  /* border: 1px solid magenta; */
  background-color: ${p => p.theme.color.primary.dark};
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: none;

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
  render() {
    return (
      <StyledNavStatusBar>
        <Item name="text">
          <Typography>Projects</Typography>
        </Item>
      </StyledNavStatusBar>
    );
  }
}

export default NavStatusBar;
