import React, { Component } from "react";
import styled from "styled-components";
import { Spring, Trail, config } from "react-spring";
import { Item, Box, Container, Area } from "../../layout";
import { Button, Typography, Photo } from "../../elements";
import PropTypes from "prop-types";

const StyledCard = styled.article`
  background-color: ${p => p.theme.color.white};
  transition-duration: 200ms;
  transition-property: box-shadow;
  box-shadow: ${p => p.theme.shadow[1]};
  display: flex;
  flex-flow: column;

  &:hover {
    box-shadow: ${p => p.theme.shadow[2]};
  }

  .container-bottom {
    flex-grow: 1;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
  }

  .item-title {
    color: ${p => p.theme.color.primary.dark};
  }
`;

export default class extends Component {
  static propTypes = {};

  static defaultProps = {
    content: {
      date: "content.date",
      category: "content.category",
      title: "content.title",
      subtitle: "content.subtitle",
      body: "content.body"
    }
  };

  render() {
    const { showModal, content } = this.props;

    return (
      <StyledCard>
        <Photo>
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
        </Photo>

        <Container name="bottom" padding="inset-m">
          <Box column>
            <Box justify="space-between">
              <Item margin="stack-m">
                <Typography variant="caption">{content.category}</Typography>
              </Item>

              <Item margin="stack-m">
                <Typography variant="caption">{content.date}</Typography>
              </Item>
            </Box>

            <Item name="title" margin="stack-m">
              <Typography as="h3">{content.title}</Typography>
            </Item>

            <Item margin="stack-base">
              <Typography as="h4">{content.subtitle}</Typography>
            </Item>

            <Item margin="stack-m">
              <Typography as="p">{content.body}</Typography>
            </Item>

            {/* >>> Technologies */}
            <Box margin="stack-base" wrap>
              <Item margin="inline-s">
                <i className="fab fa-2x fa-react" />
              </Item>

              <Item margin="inline-s">
                <i className="fab fa-2x fa-js" />
              </Item>

              <Item margin="inline-s">
                <i className="fab fa-2x fa-html5" />
              </Item>

              <Item margin="inline-s">
                <i className="fab fa-2x fa-css3" />
              </Item>

              <Item margin="inline-s">
                <i className="fab fa-2x fa-node-js" />
              </Item>
            </Box>
          </Box>

          {/* >>> Buttons */}
          <Box name="buttons" column align="stretch">
            <Item margin="stack-s">
              <Button
                variant="primary"
                full
                onClick={e => showModal(e, content.id)}
              >
                View Project
              </Button>
            </Item>

            <Item>
              <Button variant="secondary" full>
                Demo
              </Button>
            </Item>
          </Box>
        </Container>
      </StyledCard>
    );
  }
}
