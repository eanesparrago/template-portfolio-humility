import React, { Component, Fragment } from "react";
import Router, { withRouter } from "next/router";
import styled from "styled-components";
import { Spring, Transition, Trail, config } from "react-spring";
import { Sidebar, Card, Modal } from "../../components/compounds";
import { Item, Box, Container, Area } from "../../components/layout";
import { SidebarContainer, NavStatusBarContainer } from "../../containers";
import Waypoint from "react-waypoint";

import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";

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

class index extends Component {
  state = {
    currentSection: "",
    project: {},
    isModalOpen: false
  };

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown);
  }

  // >>> Dynamic
  showModal = (e, id) => {
    e.preventDefault();
    document.addEventListener("scroll", this.handleScroll);

    this.setState({
      project: this.props.projects.find(project => project.id == id)
    });
    Router.push(`/?projectId=${id}`, `/project?id=${id}`);
  };

  // >>> Static
  // showModal = (e, id) => {
  //   e.preventDefault();

  //   this.setState({
  //     project: this.props.projects.find(project => project.id == id)
  //   });
  //   Router.push(`/?projectId=${id}`, `/project/${id}`);
  // };

  dismissModal = () => {
    document.removeEventListener("scroll", this.handleScroll);

    this.setState({
      // project: {},
      isModalOpen: false
    });
    Router.push("/");
  };

  handleScroll = () => {
    this.dismissModal();
  };

  onKeyDown = e => {
    if (!this.props.router.query.projectId) return;
    if (e.keyCode === 27) {
      Router.back();
    }
  };

  handleSectionChange = section => {
    this.setState({
      currentSection: section
    });
  };

  render() {
    const { router, projects } = this.props;
    const { currentSection } = this.state;

    return (
      <StyledWrapper>
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
                        <SidebarContainer />
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
                        <NavStatusBarContainer content={currentSection} />
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
                      <Container name="modal" animate={props}>
                        <Modal
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
                    this.handleSectionChange("Projects");
                  }}
                  onLeave={() => {
                    this.handleSectionChange("Skills");
                  }}
                  // topOffset={"500px"}
                >
                  <div>
                    <Container
                      id="projects"
                      name="wrapper-projects"
                      padding="inset-base"
                    >
                      <Trail
                        delay={800}
                        native
                        items={projects}
                        keys={project => project.id}
                        from={{
                          transform:
                            "scale(0.5) translateY(6em) translateX(6em)",
                          opacity: "0"
                        }}
                        to={{
                          transform: "scale(1) translateY(0) translateX(0)",
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
                    </Container>
                  </div>
                </Waypoint>

                {/* >>> SKILLS */}
                <Waypoint
                  onEnter={() => {
                    this.handleSectionChange("Skills");
                  }}
                  onLeave={() => {
                    this.handleSectionChange("Projects");
                  }}
                  // topOffset={"500px"}
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
                    this.handleSectionChange("About Me");
                  }}
                  onLeave={() => {
                    this.handleSectionChange("Skills");
                  }}
                  // bottomOffset={"500px"}
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
