import React, { Component, Fragment } from "react";
import Router, { withRouter } from "next/router";
import styled from "styled-components";
import { Spring, Trail } from "react-spring";
import { Sidebar, Card, Modal } from "../components/compounds";
import { Item, Box, Container, Area } from "../components/layout";
import dataProjects from "../data/projects";

class project extends Component {
  static async getInitialProps({ query, pathname }) {
    const split = pathname.split("/");
    const path = split[split.length - 1];
    console.log(path);

    const content = dataProjects.find(project => project.id == query.id);

    return { content };
  }

  render() {
    // const content = this.props.projects.find(
    //   project => project.id == this.props.router.query.id
    // );

    console.log(this.props.router);

    return <Modal content={this.props.content} />;
  }
}

export default withRouter(project);
