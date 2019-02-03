import React, { Component, Fragment } from "react";
import Router, { withRouter } from "next/router";
import styled from "styled-components";
import { Spring, Trail } from "react-spring";
import { Sidebar, Card, Modal } from "../../components/compounds";
import { Item, Box, Container, Area } from "../../components/layout";
import dataProjects from "../../data/projects";

const StyledWrapper = styled.div`
  .container-wrapper-main {
    display: flex;
    align-items: flex-start;
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

  .container-modal {
    z-index: 100;
    position: fixed;
    top: 0;
    left: ${p => p.theme.incrementFixed(12)};;
    right: 0;
    height: 100vh;
  }
`;

class project extends Component {
  static async getInitialProps({ query }) {
    const content = dataProjects.find(project => project.id == query.id);

    return { content };
  }

  handleDismissModal = () => {
    Router.push("/");
  };

  render() {
    return (
      <StyledWrapper>
        <Area name="wrapper-sidebar">
          <Item name="wrapper-sidebar">
            <Sidebar />
          </Item>
        </Area>

        <Container name="modal">
          <Modal
            content={this.props.content}
            onDismiss={this.handleDismissModal}
          />
        </Container>
      </StyledWrapper>
    );
  }
}

export default withRouter(project);
