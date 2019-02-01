import React, { Component } from "react";
import { Button, Typography, Photo } from "../../elements";
import { Item, Box, Container, Area } from "../../layout";
import styled from "styled-components";

const StyledSidebar = styled.section`
  border: 1px solid magenta;
  width: ${p => p.theme.increment(12)};
  text-align: center;
  background-color: ${p => p.theme.color.white};
  height: 100%;
  /* display: inline-flex; */

  .item-photo {
    width: ${p => p.theme.increment(8)};
    height: ${p => p.theme.increment(8)};
  }

  .item-social {
    /* width:  */
  }

  .box-main {
    height: 100%;
  }

  .container-main {
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
  }

  .box-copyright {
  }

  .item-lje {
    width: var(--size-xl);
  }
`;

export default class extends Component {
  render() {
    return (
      <StyledSidebar>
        <Container name="main" padding="inset-base">
          <Box column align="center">
            <Item name="photo" margin="stack-base">
              <Photo rounded>
                <img
                  src="http://images.amcnetworks.com/ifccenter.com/wp-content/uploads/2016/12/dr-strangelove_1280x720.jpg"
                  alt=""
                />
              </Photo>
            </Item>

            <Item name="name" center margin="stack-base">
              <Typography as="h3">Doctor Strangelove</Typography>
            </Item>

            <Box wrap margin="stack-base" justify="center">
              <Item padding="squish-m">
                <Button variant="icon-link">
                  <i class="fab fa-2x fa-github" />
                </Button>
              </Item>

              <Item padding="squish-m">
                <Button variant="icon-link">
                  <i class="fab fa-2x fa-linkedin" />
                </Button>
              </Item>

              <Item padding="squish-m">
                <Button variant="icon-link">
                  <i class="fab fa-2x fa-twitter" />
                </Button>
              </Item>
            </Box>

            <Box column>
              <Button>Projects</Button>
              <Button>Templates</Button>
              <Button>Graphics</Button>
              <Button>Blog</Button>
              <Button>About Me</Button>
            </Box>
          </Box>

          <Box name="copyright" align="center">
            <Item margin="inline-m">
              <Typography>Made by LJEsp</Typography>
            </Item>

            <Item name="lje">
              <Button variant="photo-link" href="https://github.com/LJEsp">
                <Photo variant="contain" rounded>
                  <img
                    src="https://avatars1.githubusercontent.com/u/36854142?s=460&v=4"
                    alt=""
                  />
                </Photo>
              </Button>
            </Item>
          </Box>
        </Container>
      </StyledSidebar>
    );
  }
}
