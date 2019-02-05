import React, { Component, Fragment } from "react";
import Router, { withRouter } from "next/router";
import styled from "styled-components";
import { Spring, Trail, config } from "react-spring";
import { Sidebar, Card, Modal } from "../../components/compounds";
import { Item, Box, Container, Area } from "../../components/layout";
import { SidebarContainer, NavStatusBarContainer } from "../../containers";
import dataProjects from "../../data/projects";

const StyledWrapper = styled.div`
  .container-wrapper-main {
    display: flex;
    align-items: stretch;

    @media (max-width: ${p => p.theme.breakpoint.tabletLandscape}) {
      flex-flow: column;
    }
  }

  /* >>> AREA: sidebar */
  .area-wrapper-sidebar {
    min-width: ${p => p.theme.incrementFixed(16)};
    max-width: ${p => p.theme.incrementFixed(16)};

    @media (max-width: ${p => p.theme.breakpoint.tabletLandscape}) {
      min-width: 100%;
      max-width: initial;
    }
  }

  /* ------>>> ITEM: sidebar */
  .item-wrapper-sidebar {
    overflow-y: auto;
    background-color: ${p => p.theme.color.white};

    @media (max-width: ${p => p.theme.breakpoint.tabletLandscape}) {
      display: none;
    }
  }

  /* ------>>> ITEM: nav-status-bar */
  .item-wrapper-nav-status-bar {
    /* border: 1px solid magenta; */
    flex: 1;
    min-height: 100vh;
    z-index: 100;

    @media (max-width: ${p => p.theme.breakpoint.tabletLandscape}) {
      /* border: 1px solid magenta; */
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      flex: unset;
      min-height: unset;
      height: ${p => p.theme.increment(4)};
      z-index: 200;
    }
  }

  /* >>> AREA: content */
  .area-wrapper-content {
  }

  /* ------>>> CONTAINER: modal */
  .container-modal {
    z-index: 100;
    position: fixed;
    top: 0;
    left: ${p => p.theme.incrementFixed(16)};
    right: 0;
    height: 100vh;

    @media (max-width: ${p => p.theme.breakpoint.tabletLandscape}) {
      left: 0;
    }
  }
`;

const sidebarContent = {
  content: {
    profileImage:
      "http://images.amcnetworks.com/ifccenter.com/wp-content/uploads/2016/12/dr-strangelove_1280x720.jpg",
    name: "Doctor Strangelove",
    title: "Web Developer",
    socialLinks: [
      {
        class: "fab fa-2x fa-github",
        href: "https://github.com/LJEsp"
      },
      {
        class: "fab fa-2x fa-linkedin",
        href: "https://github.com/LJEsp"
      },
      {
        class: "fab fa-2x fa-twitter",
        href: "https://github.com/LJEsp"
      }
    ],
    navMenu: [
      {
        title: "Projects",
        href: "#projects"
      },
      {
        title: "Skills",
        href: "#skills"
      },
      {
        title: "About Me",
        href: "#about-me"
      }
    ],
    footer: {
      text: "Made by LJEsp",
      imageLink: "https://avatars1.githubusercontent.com/u/36854142?s=460&v=4",
      imageHref: "https://github.com/LJEsp"
    }
  }
};

class project extends Component {
  static async getInitialProps({ query }) {
    const modalContent = dataProjects.find(project => project.id == query.id);

    return { modalContent };
  }

  handleDismissModal = () => {
    Router.push("/");
  };

  handleMenuClick = title => {
    if (title === "Projects") {
      Router.push(`/`);
    } else {
      const anchor = title.toLowerCase().replace(/ /, "-");
      Router.push(`/#${anchor}`);
    }
  };

  render() {
    return (
      <StyledWrapper>
        {/* >>> SIDEBAR */}
        <Area name="wrapper-sidebar">
          <Box name="wrapper-sidebar">
            <Spring
              native
              from={{ transform: "translateX(-110vh)" }}
              to={{ transform: "translateX(0)" }}
            >
              {props => (
                <Item name="wrapper-sidebar" animate={props}>
                  <SidebarContainer
                    sidebarContent={sidebarContent}
                    handleMenuClick={this.handleMenuClick}
                  />
                </Item>
              )}
            </Spring>

            <Spring
              delay={500}
              native
              config={config.slow}
              from={{ transform: "translateY(-100%)" }}
              to={{ transform: "translateY(0)" }}
            >
              {props => (
                <Item name="wrapper-nav-status-bar" animate={props}>
                  <NavStatusBarContainer content="Projects" />
                </Item>
              )}
            </Spring>
          </Box>
        </Area>

        <Spring
          native
          from={{ transform: "translate3d(0,110vh,0)" }}
          to={{ transform: "translate3d(0,0px,0)" }}
        >
          {props => (
            <Container name="modal" animate={props}>
              <Modal
                content={this.props.modalContent}
                onDismiss={this.handleDismissModal}
              />
            </Container>
          )}
        </Spring>
      </StyledWrapper>
    );
  }
}

export default withRouter(project);
