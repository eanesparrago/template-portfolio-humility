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
  }

  /* >>> AREA: sidebar */
  .area-wrapper-sidebar {
    min-width: ${p => p.theme.incrementFixed(16)};
    max-width: ${p => p.theme.incrementFixed(16)};
  }

  /* ------>>> BOX: sidebar */
  .box-wrapper-sidebar {
    min-width: ${p => p.theme.incrementFixed(16)};
    max-width: ${p => p.theme.incrementFixed(16)};
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    min-height: 100vh;
  }

  /* ------>>> ITEM: sidebar */
  .item-wrapper-sidebar {
    overflow-y: auto;
    background-color: ${p => p.theme.color.white};
  }

  /* ------>>> ITEM: nav-status-bar */
  .item-wrapper-nav-status-bar {
    /* border: 1px solid magenta; */
    flex: 1;
    min-height: 100vh;
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
  }

  /* ------>>> CONTAINER: projects */
  .container-wrapper-projects {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    padding-right: 0;
    position: relative;
  }

  /* ======------>>> ITEM: card */
  .item-wrapper-card {
    /* border: 1px solid magenta; */
    min-width: ${p => p.theme.incrementFixed(12)};
    max-width: ${p => p.theme.incrementFixed(16)};
  }

  /* ------>>> CONTAINER: skills */
  .container-wrapper-skills {
    background-color: ${p => p.theme.color.primary.dark};
    color: ${p => p.theme.color.light};
  }

  /* ======------>>> ITEM: skills */
  .item-wrapper-skills {
    width: calc(100% / 1.618);
  }

  /* ------>>> CONTAINER: about-me */
  .container-wrapper-about-me {
    background-color: ${p => p.theme.color.dark};
    color: ${p => p.theme.color.light};
    min-height: 100vh;
  }

  /* ======------>>> ITEM: about-me */
  .item-wrapper-about-me {
    width: calc(100% / 1.618);
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
    const anchor = title.toLowerCase().replace(/ /, "-");
    Router.push(`/#${anchor}`);
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

        <Container name="modal">
          <Modal
            content={this.props.modalContent}
            onDismiss={this.handleDismissModal}
          />
        </Container>
      </StyledWrapper>
    );
  }
}

export default withRouter(project);
