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

  > .item-text {
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
    transition-duration: 200ms;

    @media (max-width: ${p => p.theme.breakpoint.tabletLandscape}) {
      writing-mode: unset;
      letter-spacing: 0.125em;
    }
  }

  > .item-text--hidden {
    @media (max-width: ${p => p.theme.breakpoint.tabletLandscape}) {
      opacity: 0;
      transform: translateX(-6em);
    }
  }

  > .box-menu {
    display: none;
    position: absolute;
    opacity: 0;
    transform: translateX(6rem);
    transition-duration: 200ms;

    @media (max-width: ${p => p.theme.breakpoint.tabletLandscape}) {
      display: flex;
    }

    .item-button {
      color: ${p => p.theme.color.light};

      &:hover {
        color: ${p => p.theme.color.primary.light};
      }
    }
  }

  > .box-menu--open {
    opacity: 1;
    transform: translateX(-1rem);
  }

  > .item-hamburger {
    display: none;
    color: ${p => p.theme.color.light};

    @media (max-width: ${p => p.theme.breakpoint.tabletLandscape}) {
      display: block;
      position: absolute;
      right: var(--size-base);
    }
  }
`;

class NavStatusBar extends Component {
  static propTypes = {
    content: PropTypes.string
  };

  static defaultProps = {
    content: "Projects"
  };

  state = {
    isMenuOpen: false
  };

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  onMenuClick = section => {
    this.toggleMenu();
    this.props.handleMenuClick(section);
  };

  render() {
    const { content } = this.props;
    const { isMenuOpen } = this.state;

    return (
      <StyledNavStatusBar content={content}>
        <Item name={`text ${isMenuOpen && "item-text--hidden"}`}>
          <Typography>{content}</Typography>
        </Item>

        <Box name={`menu ${isMenuOpen && "box-menu--open"}`}>
          <Item
            margin="inline-s"
            name="button"
            onClick={() => this.onMenuClick("Projects")}
          >
            <Button variant="text">Projects</Button>
          </Item>

          <Item
            margin="inline-s"
            name="button"
            onClick={() => this.onMenuClick("Skills")}
          >
            <Button variant="text">Skills</Button>
          </Item>

          <Item
            margin="inline-s"
            name="button"
            onClick={() => this.onMenuClick("About Me")}
          >
            <Button variant="text">About Me</Button>
          </Item>
        </Box>

        <Item name="hamburger">
          {isMenuOpen ? (
            <Button dark variant="icon" onClick={this.toggleMenu}>
              <i className="fas fa-2x fa-times" />
            </Button>
          ) : (
            <Button dark variant="icon" onClick={this.toggleMenu}>
              <i className="fas fa-2x fa-bars" />
            </Button>
          )}
        </Item>
      </StyledNavStatusBar>
    );
  }
}

export default NavStatusBar;
