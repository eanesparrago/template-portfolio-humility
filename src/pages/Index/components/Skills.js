import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Item, Box, Container, Area } from "../../../components/layout";
import { Typography } from "../../../components/elements";

const StyledSkills = styled.div`
  padding-top: ${p => p.theme.increment(4)};
  padding-left: ${p => p.theme.increment(2)};

  .item-skills-title {
  }
`;

export class Skills extends Component {
  static propTypes = {};

  render() {
    const frontEndSkills = ["HTML", "CSS", "Sass", "JavaScript", "React"];
    const frontEndDev = ["Git (GitHub)", "Visual Studio Code"];

    return (
      <StyledSkills>
        <Container margin="stack-xl">
          <Item name="skills-title" margin="stack-base">
            <Typography as="h1">Front-End Development</Typography>
          </Item>

          <Item margin="stack-l">
            <Typography as="h2">Web-Technologies</Typography>
          </Item>

          <Box margin="stack-m" column as="ul">
            {frontEndSkills.map((skill, i) => (
              <Item key={i} margin="stack-base" as="li">
                <Typography as="h3">• {skill}</Typography>
              </Item>
            ))}
          </Box>

          <Item margin="stack-l">
            <Typography as="h2">Development Tools</Typography>
          </Item>

          <Box column as="ul">
            {frontEndSkills.map((skill, i) => (
              <Item key={i} margin="stack-base" as="li">
                <Typography as="h3">• {skill}</Typography>
              </Item>
            ))}
          </Box>
        </Container>

        <Container margin="stack-xl">
          <Item name="skills-title" margin="stack-base">
            <Typography as="h1">UI/UX Design</Typography>
          </Item>

          <Item margin="stack-l">
            <Typography as="h2">Web-Technologies</Typography>
          </Item>

          <Box margin="stack-m" column as="ul">
            {frontEndSkills.map((skill, i) => (
              <Item key={i} margin="stack-base" as="li">
                <Typography as="h3">• {skill}</Typography>
              </Item>
            ))}
          </Box>

          <Item margin="stack-l">
            <Typography as="h2">Development Tools</Typography>
          </Item>

          <Box column as="ul">
            {frontEndSkills.map((skill, i) => (
              <Item key={i} margin="stack-base" as="li">
                <Typography as="h3">• {skill}</Typography>
              </Item>
            ))}
          </Box>
        </Container>

        <Container margin="stack-xl">
          <Item name="skills-title" margin="stack-base">
            <Typography as="h1">Back-End Development</Typography>
          </Item>

          <Item margin="stack-l">
            <Typography as="h2">Web-Technologies</Typography>
          </Item>

          <Box margin="stack-m" column as="ul">
            {frontEndSkills.map((skill, i) => (
              <Item key={i} margin="stack-base" as="li">
                <Typography as="h3">• {skill}</Typography>
              </Item>
            ))}
          </Box>

          <Item margin="stack-l">
            <Typography as="h2">Development Tools</Typography>
          </Item>

          <Box column as="ul">
            {frontEndSkills.map((skill, i) => (
              <Item key={i} margin="stack-base" as="li">
                <Typography as="h3">• {skill}</Typography>
              </Item>
            ))}
          </Box>
        </Container>
      </StyledSkills>
    );
  }
}

export default Skills;
