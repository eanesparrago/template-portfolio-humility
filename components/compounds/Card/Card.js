import React, { Component } from "react";
import styled from "styled-components";
import { Spring, Trail, config } from "react-spring";
import { Item, Box, Container, Area } from "../../layout";
import { Button, Typography, Photo } from "../../elements";

const StyledCard = styled.article`
  background-color: ${p => p.theme.color.white};
  transition-duration: 200ms;
  transition-property: box-shadow;
  box-shadow: ${p => p.theme.shadow[1]};

  &:hover {
    box-shadow: ${p => p.theme.shadow[2]};
  }
`;

export default class extends Component {
  render() {
    return (
      <StyledCard>
        <Photo>
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
        </Photo>

        <Container padding="inset-m">
          <Item margin="stack-m">
            <Typography variant="caption">Project</Typography>
          </Item>

          <Item margin="stack-base">
            <Typography as="h3">Humility &mdash; Portfolio Template</Typography>
          </Item>

          <Item margin="stack-base">
            <Typography as="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              sequi quidem cumque at provident sapiente, ipsam fuga. Distinctio
              ea numquam aliquid quo, ipsam molestias fugit quidem aliquam
              quibusdam dolore quae!
            </Typography>
          </Item>

          <Box column align="stretch">
            <Item margin="stack-s">
              <Button variant="primary" full>
                {/* <Item inline margin="inline-s">
                  <i className="fab fa-github" />
                </Item> */}
                View Project
              </Button>
            </Item>

            <Item>
              <Button variant="secondary" full>
                {/* <Item inline margin="inline-s">
                  <i className="fab fa-github" />
                </Item> */}
                Visit Demo
              </Button>
            </Item>
          </Box>
        </Container>
      </StyledCard>
    );
  }
}
