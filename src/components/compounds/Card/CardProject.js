import React, { Component } from "react";
import styled from "styled-components";
import { Spring, Trail, config } from "react-spring";
import { Item, Box, Container, Area } from "../../layout";
import { Button, Typography, Photo } from "../../elements";
import PropTypes from "prop-types";
import getIcon from "../../utils/getIcon";

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
    /* height: 68%; */
  }

  .item-title {
    color: ${p => p.theme.color.primary.dark};
  }

  .item-card-project-photo {
    height: ${p => p.theme.increment(16)};
    cursor: pointer;
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
        <Item name="card-project-photo" onClick={e => showModal(e, content.id)}>
          <Photo>
            <img
              src={content.photos[0].link}
              alt={content.photos[0].description}
            />
          </Photo>
        </Item>

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

            <Item margin="stack-base">
              <Typography as="p">{content.description}</Typography>
            </Item>

            {/* >>> Technologies */}
            <Box margin="stack-l">
              {content.technologies.map((tech, i) => (
                <Item key={i} margin="inline-s">
                  <i title={tech} className={getIcon(tech)} />
                </Item>
              ))}
            </Box>
          </Box>

          {/* >>> Buttons */}
          <Box name="buttons" column align="stretch">
            {content.links.demo && (
              <Item margin="stack-s">
                <Button
                  link
                  variant="secondary"
                  href={content.links.demo}
                  align="center"
                  full
                >
                  <Item center inline margin="inline-s">
                    Visit Demo
                  </Item>

                  <i className="fas fa-external-link-alt" />
                </Button>
              </Item>
            )}

            <Item>
              <Button
                variant="primary"
                full
                onClick={e => showModal(e, content.id)}
              >
                View Project
              </Button>
            </Item>
          </Box>
        </Container>
      </StyledCard>
    );
  }
}
