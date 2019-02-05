import React, { Component } from "react";
import styled from "styled-components";
import { Spring, Trail, Transition } from "react-spring";
import { Item, Box, Container, Area } from "../../layout";
import { Button, Typography, Photo } from "../../elements";
import getIcon from "../../utils/getIcon";

const StyledModal = styled.div`
  .container-modal-background {
    position: absolute;
    background-color: ${p => p.theme.color.white};
    width: 100%;
    height: 100%;
    opacity: 0.8;
    z-index: 100;
  }

  .container-modal-main {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    z-index: 101;

    @media (max-width: ${p => p.theme.breakpoint.desktopM}) {
      flex-flow: column;
      overflow-y: auto;
    }
  }

  /* >>> Modal photos */
  .area-modal-photos {
    /* border: 1px solid magenta; */
    min-width: 62%;

    @media (max-width: ${p => p.theme.breakpoint.desktopM}) {
      min-width: 100%;
      height: ${p => p.theme.incrementFixed(18)};
    }
  }

  .item-modal-main-photo {
    /* border: 1px solid magenta; */
    height: 62%;
    width: 100%;
  }

  .box-modal-gallery {
    /* border: 1px solid cyan; */
    height: 38%;
    max-width: 100%;
    position: relative;

    @media (max-width: ${p => p.theme.breakpoint.desktopM}) {
      > *:last-child {
        /* border: 1px solid magenta; */
        margin: 0;
      }
    }
  }

  .container-modal-dismiss-background {
    background-color: transparent;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .item-modal-gallery {
    /* border: 1px solid magenta; */
    flex: 1 0;
    box-shadow: ${p => p.theme.shadow[1]};
    height: 62%;
    cursor: pointer;
    transition-duration: 200ms;
    transition-timing-function: ease-out;
    z-index: 100;

    @media (max-width: ${p => p.theme.breakpoint.desktopM}) {
      height: 100%;
    }

    &:hover {
      box-shadow: ${p => p.theme.shadow[2]};
    }

    &--active {
      transform: translateY(-1rem);
      cursor: auto;

      @media (max-width: ${p => p.theme.breakpoint.desktopM}) {
        transform: translateY(-0.5rem);
      }
    }
  }

  /* >>> Modal detail */
  .area-modal-detail {
    /* border: 1px solid magenta; */
    background-color: ${p => p.theme.color.white};
    min-width: 38%;
    width: 100%;
    padding-bottom: ${p => p.theme.increment(6)};

    @media (max-width: ${p => p.theme.breakpoint.desktopM}) {
      min-width: 100%;
    }
  }

  .container-modal-close {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 102;

    @media (max-width: ${p => p.theme.breakpoint.desktopM}) {
      color: ${p => p.theme.color.primary.light};
    }
  }

  .item-modal-title {
    color: ${p => p.theme.color.primary.dark};

    @media (max-width: ${p => p.theme.breakpoint.desktopM}) {
      margin-bottom: var(--size-l);
    }
  }

  .item-modal-description {
    color: ${p => p.theme.color.primary.dark};
    font-weight: 700;
  }
`;

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mainPhoto: props.content.photos[0]
    };
  }

  handlePhotoClick = i => {
    this.setState({ mainPhoto: this.props.content.photos[i] });
  };

  render() {
    const { content, onDismiss } = this.props;
    const { mainPhoto } = this.state;

    return (
      <StyledModal>
        <Container name="modal-background" />

        <Container name="modal-main">
          <Area name="modal-photos">
            {/* >>> Main photo */}
            <Item name="modal-main-photo">
              <Photo variant="cover">
                <img src={mainPhoto.link} alt={mainPhoto.description} />
              </Photo>
            </Item>

            {/* >>> Gallery */}
            <Box
              name="modal-gallery"
              padding="inset-base"
              align="center"
              justify="center"
            >
              <Container name="modal-dismiss-background" onClick={onDismiss} />

              {content.photos.map((photo, i) => (
                <Item
                  name={`modal-gallery ${mainPhoto.link === photo.link &&
                    "item-modal-gallery--active"}`}
                  margin="inline-m"
                  key={i}
                  onClick={() => this.handlePhotoClick(i)}
                >
                  <Photo variant="cover">
                    <img src={photo.link} alt={photo.description} />
                  </Photo>
                </Item>
              ))}
            </Box>
          </Area>

          {/* >>> Close */}
          <Area name="modal-detail" padding="inset-base">
            <Container name="modal-close" padding="inset-base">
              <Button variant="icon" onClick={onDismiss}>
                <i className="fas fa-2x fa-times" />
              </Button>
            </Container>

            {/* >>> Category */}
            <Item margin="stack-l">
              <Typography variant="caption">{content.category}</Typography>
            </Item>

            {/* >>> Title */}
            <Item name="modal-title" margin="stack-m">
              <Typography as="h1">{content.title}</Typography>
            </Item>

            {/* >>> Subtitle */}
            <Item margin="stack-m">
              <Typography as="h2">{content.subtitle}</Typography>
            </Item>

            {/* >>> Date */}
            <Item margin="stack-base">
              <Typography variant="caption">{content.date}</Typography>
            </Item>

            {/* >>> Description */}
            <Item name="modal-description" margin="stack-m">
              <Typography as="p">{content.description}</Typography>
            </Item>

            {/* >>> Technologies */}
            <Box margin="stack-base" wrap>
              {content.technologies.map((tech, i) => (
                <Item key={i} margin="inline-m">
                  <i title={tech} className={getIcon(tech)} />
                </Item>
              ))}
            </Box>

            {/* >>> Body */}
            <Item margin="stack-base">
              <Typography as="p">{content.body}</Typography>
            </Item>

            {/* >>> Buttons */}
            {content.links.demo && (
              <Item margin="stack-s">
                <Button link variant="secondary" href={content.links.demo} full>
                  <Item center inline margin="inline-s">
                    Visit Demo
                  </Item>

                  <i className="fas fa-external-link-alt" />
                </Button>
              </Item>
            )}

            {content.links.github && (
              <Item>
                <Button link variant="primary" href={content.links.github} full>
                  <Item center inline margin="inline-s">
                    Visit on Github
                  </Item>

                  <i className="fab fa-github" />
                </Button>
              </Item>
            )}
          </Area>
        </Container>
      </StyledModal>
    );
  }
}

export default Modal;
