import React, { Component, Fragment } from "react";
import Router, { withRouter } from "next/router";
import styled from "styled-components";
import Waypoint from "react-waypoint";
import { Spring, Transition, Trail, config } from "react-spring";
import { Sidebar, Card, Modal } from "../../components/compounds";
import { Item, Box, Container, Area } from "../../components/layout";
import {
  SidebarContainer,
  NavStatusBarContainer,
  ModalContainer
} from "../../containers";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock";

import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";

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
      text: "Made by Ian",
      imageLink: "https://avatars1.githubusercontent.com/u/36854142?s=460&v=4",
      imageHref: "https://github.com/LJEsp"
    }
  }
};

const StyledWrapper = styled.div`
  .container-wrapper-main {
    display: flex;
    align-items: stretch;

    @media (max-width: ${p => p.theme.breakpoint.tabletLandscape}) {
      flex-flow: column;
      max-width: 100vw;
      overflow: none;
      overflow-x: none !important;
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

  /* ------>>> BOX: sidebar */
  .box-wrapper-sidebar {
    min-width: ${p => p.theme.incrementFixed(16)};
    max-width: ${p => p.theme.incrementFixed(16)};
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    min-height: 100vh;

    @media (max-width: ${p => p.theme.breakpoint.tabletLandscape}) {
      min-width: 100%;
      max-width: initial;
      position: relative;
      min-height: initial;
    }
  }

  /* ------>>> ITEM: sidebar */
  .item-wrapper-sidebar {
    overflow-y: auto;
    background-color: ${p => p.theme.color.white};

    @media (max-width: ${p => p.theme.breakpoint.tabletLandscape}) {
      width: 100%;
      padding-bottom: 6rem;
      margin-bottom: -6rem;
    }
  }

  /* ------>>> ITEM: nav-status-bar */
  .item-wrapper-nav-status-bar {
    /* border: 1px solid magenta; */
    flex: 1;
    min-height: 100vh;
    z-index: 50;

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
      left: 0
    }
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
    /* min-height: ${p => p.theme.incrementFixed(16)}; */
    /* max-height: ${p => p.theme.incrementFixed(24)}; */
  }

  /* ------>>> CONTAINER: skills */
  .container-wrapper-skills {
    background-color: ${p => p.theme.color.primary.dark};
    color: ${p => p.theme.color.light};
  }

  /* ======------>>> ITEM: skills */
  .item-wrapper-skills {
    width: calc(100% / 1.618);

    @media (max-width: ${p => p.theme.breakpoint.desktopM}) {
      width: unset;
    }
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

    @media (max-width: ${p => p.theme.breakpoint.desktopM}) {
      width: unset;
    }
  }
`;

class index extends Component {
  state = {
    currentSection: "Projects",
    project: {},
    isModalOpen: false
  };

  modal = React.createRef();

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown);
    this.modal = this.modal.current;
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown);
    clearAllBodyScrollLocks();
  }

  // >>> Dynamic
  // showModal = (e, id) => {
  //   e.preventDefault();
  //   document.addEventListener("scroll", this.handleScroll);

  //   disableBodyScroll(this.modal);

  //   this.setState({
  //     project: this.props.projects.find(project => project.id == id)
  //   });
  //   Router.push(`/?projectId=${id}`, `/project?id=${id}`);
  // };

  // >>> Static
  showModal = (e, id) => {
    e.preventDefault();
    // document.addEventListener("scroll", this.handleScroll);

    disableBodyScroll(this.modal);

    this.setState({
      project: this.props.projects.find(project => project.id == id)
    });
    Router.push(`/?projectId=${id}`, `/project/${id}`);
  };

  dismissModal = () => {
    // document.removeEventListener("scroll", this.handleScroll);

    enableBodyScroll(this.modal);

    this.setState({
      // project: {},
      isModalOpen: false
    });
    Router.push("/");
  };

  // handleScroll = () => {
  //   this.dismissModal();
  // };

  onKeyDown = e => {
    if (!this.props.router.query.projectId) return;
    if (e.keyCode === 27) {
      this.dismissModal();
    }
  };

  handleSectionScroll = section => {
    this.setState({
      currentSection: section
    });
  };

  handleMenuClick = title => {
    const anchor = title.toLowerCase().replace(/ /, "-");

    enableBodyScroll(this.modal);

    Router.push(`/#${anchor}`).then(() => {
      // >>> Bug workaround >:(
      // setTimeout(() => {
      //   this.setState({ currentSection: title });
      // }, 100);
    });
  };

  render() {
    const { router, projects } = this.props;
    const { currentSection } = this.state;

    return (
      <StyledWrapper id="projects">
        <Spring native from={{ opacity: "0" }} to={{ opacity: "1" }}>
          {props => (
            <Container name="wrapper-main" animate={props}>
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
                        <NavStatusBarContainer
                          content={currentSection}
                          handleMenuClick={this.handleMenuClick}
                        />
                      </Item>
                    )}
                  </Spring>
                </Box>
              </Area>

              {/* >>> CONTENT */}
              <Area>
                {/* >>> MODAL */}
                <Transition
                  native
                  items={router.query.projectId}
                  from={{ transform: "translate3d(0,110vh,0)" }}
                  enter={{ transform: "translate3d(0,0px,0)" }}
                  leave={{ transform: "translate3d(0,110vh,0)" }}
                >
                  {show =>
                    show &&
                    (props => (
                      <Container name="modal" animate={props} ref={this.modal}>
                        <ModalContainer
                          id={router.query.projectId}
                          onDismiss={this.dismissModal}
                          content={this.state.project}
                        />
                      </Container>
                    ))
                  }
                </Transition>

                {/* >>> PROJECTS */}
                <Waypoint
                  onEnter={() => {
                    this.handleSectionScroll("Projects");
                  }}
                  onLeave={() => {
                    this.handleSectionScroll("Skills");
                  }}
                  topOffset={"500px"}
                >
                  <div>
                    {/* <Spring
                      delay={1200}
                      native
                      config={config.slow}
                      from={{
                        opacity: "0",
                        transform: "translateY(6em)"
                      }}
                      to={{
                        opacity: "1",
                        transform: "translateY(0)"
                      }}
                    >
                      {props => ( */}
                    <Container
                      name="wrapper-projects"
                      padding="inset-base"
                      // animate={props}
                    >
                      <Trail
                          delay={800}
                          native
                          items={projects}
                          keys={project => project.id}
                          from={{
                            transform:
                              "scale(0.5)",
                            opacity: "0"
                          }}
                          to={{
                            transform: "scale(1)",
                            opacity: "1"
                          }}
                        >
                          {project => props => (
                            <Item
                              name="wrapper-card"
                              key={project.id}
                              animate={props}
                              margin="wrap-base"
                            >
                              <Card
                                content={project}
                                showModal={this.showModal}
                              />
                            </Item>
                          )}
                        </Trail>

                      {/* {projects.map(project => (
                        <Item
                          name="wrapper-card"
                          key={project.id}
                          margin="wrap-base"
                        >
                          <Card content={project} showModal={this.showModal} />
                        </Item>
                      ))} */}
                    </Container>
                    {/* )} 
                    </Spring> */}
                  </div>
                </Waypoint>

                {/* >>> SKILLS */}
                <Waypoint
                  onEnter={() => {
                    this.handleSectionScroll("Skills");
                  }}
                  // onLeave={() => {
                  //   this.handleSectionScroll("Projects");
                  // }}
                  bottomOffset={"500px"}
                  topOffset={"500px"}
                >
                  <div>
                    <Container
                      id="skills"
                      name="wrapper-skills"
                      padding="inset-base"
                    >
                      <Item name="wrapper-skills">
                        <Skills />
                      </Item>
                    </Container>
                  </div>
                </Waypoint>

                {/* >>> ABOUT ME */}

                <Waypoint
                  onEnter={() => {
                    this.handleSectionScroll("About Me");
                  }}
                  onLeave={() => {
                    this.handleSectionScroll("Skills");
                  }}
                  bottomOffset={"500px"}
                >
                  <div>
                    <Container
                      id="about-me"
                      name="wrapper-about-me"
                      padding="inset-base"
                    >
                      <Item name="wrapper-about-me">
                        <AboutMe />
                      </Item>
                    </Container>
                  </div>
                </Waypoint>
              </Area>
            </Container>
          )}
        </Spring>
      </StyledWrapper>
    );
  }
}

export default withRouter(index);
