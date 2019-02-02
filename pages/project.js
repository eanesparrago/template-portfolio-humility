import React, { Component, Fragment } from "react";
import Router, { withRouter } from "next/router";
import styled from "styled-components";
import { Spring, Trail } from "react-spring";
import { Sidebar, Card, Modal } from "../components/compounds";
import { Item, Box, Container, Area } from "../components/layout";

class project extends Component {
  render() {
    const content = this.props.projects.find(
      project => project.id == this.props.router.query.id
    );

    return <Modal content={content} />;
  }
}

export default withRouter(project);
