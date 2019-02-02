import React, { Component } from "react";
import styled from "styled-components";
import { Spring, Trail, Transition } from "react-spring";
import { Item, Box, Container, Area } from "../../layout";
import { Button, Typography, Photo } from "../../elements";

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
  }

  /* >>> Modal photos */
  .area-modal-photos {
    /* border: 1px solid magenta; */
    min-width: 62%;
    height: 100%;
  }

  .item-modal-main-photo {
    height: 62%;
  }

  .box-modal-gallery {
    height: 38%;
  }

  .item-modal-gallery {
    box-shadow: ${p => p.theme.shadow[1]};
  }

  /* >>> Modal detail */
  .area-modal-detail {
    background-color: ${p => p.theme.color.white};
    min-width: 38%;
  }

  .container-modal-close {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 102;
  }
`;

class Modal extends Component {
  render() {
    const { content, onDismiss } = this.props;

    return (
      <StyledModal>
        <Container name="modal-background" />

        <Container name="modal-main">
          <Area name="modal-photos">
            <Item name="modal-main-photo">
              <Photo variant="cover">
                <img
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  alt=""
                />
              </Photo>
            </Item>

            <Box
              name="modal-gallery"
              padding="inset-base"
              align="center"
              onClick={onDismiss}
            >
              <Item name="modal-gallery" margin="inline-m">
                <Photo variant="cover">
                  <img
                    src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                    alt=""
                  />
                </Photo>
              </Item>

              <Item name="modal-gallery" margin="inline-m">
                <Photo variant="cover">
                  <img
                    src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                    alt=""
                  />
                </Photo>
              </Item>

              <Item name="modal-gallery" margin="inline-m">
                <Photo variant="cover">
                  <img
                    src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                    alt=""
                  />
                </Photo>
              </Item>
            </Box>
          </Area>

          <Area name="modal-detail" padding="inset-base">
            <Container name="modal-close" padding="inset-base">
              <Button variant="icon" onClick={onDismiss}>
                <i className="fas fa-2x fa-times" />
              </Button>
            </Container>

            <Item margin="stack-l">
              <Typography variant="caption">{content.category}</Typography>
            </Item>

            <Item margin="stack-m">
              <Typography as="h1">{content.title}</Typography>
            </Item>

            <Item margin="stack-base">
              <Typography as="h2">{content.subtitle}</Typography>
            </Item>

            <Item margin="stack-l">
              <Typography as="p">{content.body}</Typography>
            </Item>

            <Item margin="stack-s">
              <Button variant="primary" full>
                View Project
              </Button>
            </Item>

            <Item>
              <Button variant="secondary" full>
                Visit Demo
              </Button>
            </Item>
          </Area>
        </Container>
      </StyledModal>
    );
  }
}

export default Modal;
