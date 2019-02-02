import React, { Component, Fragment } from "react";
import Router, { withRouter } from "next/router";
import styled from "styled-components";
import { Transition, Trail } from "react-spring";
import { Sidebar, Card, Modal } from "../components/compounds";
import { Item, Box, Container, Area } from "../components/layout";

const StyledWrapper = styled.div`
  .container-wrapper-main {
    display: flex;
    align-items: flex-start;

    /* @media (max-width: ${p => p.theme.breakpoint.mobile}) {
      flex-flow: column;
    } */
  }

  .area-wrapper-sidebar {
    min-width: ${p => p.theme.incrementFixed(12)};

    /* @media (max-width: ${p => p.theme.breakpoint.mobile}) {
      min-width: 100%;
    } */
  }

  .item-wrapper-sidebar {
    max-width: ${p => p.theme.incrementFixed(12)};
    background-color: ${p => p.theme.color.white};
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    min-height: 100vh;
    overflow-y: auto;

    /* @media (max-width: ${p => p.theme.breakpoint.mobile}) {
      position: relative;
      width: 100%;
      min-height: auto;
    } */
  }

  .area-wrapper-card {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    justify-items: center;
    padding-right: 0;
    position: relative;
  }

  .item-wrapper-card {
    /* border: 1px solid magenta; */
    min-width: ${p => p.theme.incrementFixed(12)};
    max-width: ${p => p.theme.incrementFixed(16)};
  }

  .container-modal {
    z-index: 100;
    position: fixed;
    top: 0;
    left: ${p => p.theme.incrementFixed(12)};;
    right: 0;
    height: 100vh;
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
  // showModal = (e, id) => {
  //   e.preventDefault();

  //   this.setState({
  //     project: this.props.projects.find(project => project.id == id)
  //   });
  //   Router.push(`/?projectId=${id}`, `/project?id=${id}`);
  // };

  // >>> Static
  showModal = (e, id) => {
    e.preventDefault();

    this.setState({
      project: this.props.projects.find(project => project.id == id)
    });
    Router.push(`/?projectId=${id}`, `/project/${id}`);
  };

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
          <Area name="wrapper-sidebar">
            <Item name="wrapper-sidebar">
              <Sidebar />
            </Item>
          </Area>

          <Area name="wrapper-card" padding="inset-base">
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
                  <Container name="modal" animate style={props}>
                    <Modal
                      id={router.query.projectId}
                      onDismiss={this.dismissModal}
                      content={this.state.project}
                    />
                  </Container>
                ))
              }
            </Transition>

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
                  style={props}
                  animate
                  margin="wrap-base"
                >
                  <Card content={project} showModal={this.showModal} />
                </Item>
              )}
            </Trail>
          </Area>
        </Container>
      </StyledWrapper>
    );
  }
}

export default withRouter(index);
