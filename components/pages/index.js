import React, { Component, Fragment } from "react";
import Router, { withRouter } from "next/router";
import styled from "styled-components";
import { Spring, Transition, Trail, config } from "react-spring";
import { Sidebar, Card, Modal } from "../../components/compounds";
import { Item, Box, Container, Area } from "../../components/layout";
import { NavStatusBarContainer } from "../../components/containers";

const StyledWrapper = styled.div`
  .container-wrapper-main {
    display: flex;
    align-items: stretch;
  }

  /* >>> AREA: sidebar */
  .area-wrapper-sidebar {
    min-width: ${p => p.theme.incrementFixed(16)};
  }

  /* ------>>> BOX: sidebar */
  .box-wrapper-sidebar {
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
    height: 100vh;
    width: ${p => p.theme.incrementFixed(4)};
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
  }
`;

class index extends Component {
  state = {
    project: {},
    isModalOpen: false
  };

  constructor(props) {
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown);
  }

  // >>> Dynamic
  showModal = (e, id) => {
    e.preventDefault();

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
    this.setState({
      // project: {},
      isModalOpen: false
    });
    Router.push("/");
  };

  onKeyDown(e) {
    if (!this.props.router.query.id) return;
    if (e.keyCode === 27) {
      Router.back();
    }
  }

  render() {
    const { router, projects } = this.props;

    return (
      <StyledWrapper>
        <Container name="wrapper-main">
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
                    <Sidebar />
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
                    <NavStatusBarContainer />
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
            <Container name="wrapper-projects" padding="inset-base">
              <Trail
                delay={800}
                native
                items={projects}
                keys={project => project.id}
                from={{
                  transform: "scale(0.5) translateY(6em) translateX(6em)",
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
                    <Card content={project} showModal={this.showModal} />
                  </Item>
                )}
              </Trail>
            </Container>

            {/* >>> SKILLS */}
            <Container name="wrapper-skills">skills</Container>
          </Area>
        </Container>
      </StyledWrapper>
    );
  }
}

export default withRouter(index);
