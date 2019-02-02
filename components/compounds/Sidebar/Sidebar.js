import React, { Component } from "react";
import styled from "styled-components";
import { Spring, Trail, config } from "react-spring";
import { Item, Box, Container, Area } from "../../layout";
import { Button, Typography, Photo } from "../../elements";

const StyledSidebar = styled.section`
  width: ${p => p.theme.incrementFixed(12)};
  text-align: center;
  background-color: ${p => p.theme.color.white};
  height: 100%;
  /* display: inline-flex; */

  .container-main {
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
  }

  .item-photo {
    width: ${p => p.theme.increment(8)};
    height: ${p => p.theme.increment(8)};
    z-index: 1;
  }

  .item-social {
    backface-visibility: hidden;
    transform: translateZ(0);
    -webkit-font-smoothing: subpixel-antialiased;
  }

  .box-copyright {
    margin: 0 auto;
  }

  .item-lje {
    width: var(--size-xl);
  }
`;

const socialIcons = [
  { class: "fab fa-2x fa-github", href: "https://github.com/LJEsp" },
  { class: "fab fa-2x fa-linkedin", href: "https://github.com/LJEsp" },
  { class: "fab fa-2x fa-twitter", href: "https://github.com/LJEsp" }
];

const navItems = ["Projects", "Templates", "Graphics", "Blog", "About Me"];

export default class extends Component {
  render() {
    return (
      <StyledSidebar>
        <Container name="main" padding="inset-base">
          <Box column align="center">
            <Spring
              native
              // config={config.stiff}
              from={{ opacity: "0", transform: "rotate(180deg)" }}
              to={{ opacity: "1", transform: "rotate(0deg)" }}
            >
              {props => (
                <Item style={props} name="photo" animate margin="stack-base">
                  <Photo rounded>
                    <img
                      src="http://images.amcnetworks.com/ifccenter.com/wp-content/uploads/2016/12/dr-strangelove_1280x720.jpg"
                      alt=""
                    />
                  </Photo>
                </Item>
              )}
            </Spring>

            <Spring
              delay={200}
              native
              from={{ opacity: "0", transform: "translateY(-10em)" }}
              to={{ opacity: "1", transform: "translateY(0em)" }}
            >
              {props => (
                <Item
                  name="name"
                  style={props}
                  animate
                  center
                  margin="stack-base"
                >
                  <Typography as="h3">Doctor Strangelove</Typography>
                </Item>
              )}
            </Spring>

            {/* >>> Social links */}
            <Box wrap margin="stack-base" justify="center">
              <Trail
                delay={600}
                config={config.stiff}
                items={socialIcons}
                native
                keys={item => item.class}
                from={{ opacity: "0" }}
                to={{ opacity: "1" }}
              >
                {social => props => (
                  <Item
                    name="social"
                    key={social.class}
                    style={props}
                    animate
                    padding="squish-m"
                  >
                    <Button variant="icon-link" href={social.href}>
                      <i className={social.class} />
                    </Button>
                  </Item>
                )}
              </Trail>
            </Box>

            {/* >>> Nav */}
            <Box column as="nav" margin="stack-base">
              <Trail
                delay={800}
                config={config.stiff}
                native
                items={navItems}
                keys={item => item}
                from={{ opacity: "0", transform: "translateX(-10em)" }}
                to={{ opacity: "1", transform: "translateX(0)" }}
              >
                {item => props => (
                  <Item key={item} style={props} animate padding="squish-m">
                    <Button variant="text">{item}</Button>
                  </Item>
                )}
              </Trail>
            </Box>
          </Box>

          <Spring
            delay={1500}
            config={config.stiff}
            native
            from={{ transform: "translateY(20em)" }}
            to={{ transform: "translateY(0)" }}
          >
            {props => (
              <Box name="copyright" style={props} animate align="center">
                <Item margin="inline-m">
                  <Typography>Made by LJEsp</Typography>
                </Item>

                <Item name="lje">
                  <Button variant="photo-link" href="https://github.com/LJEsp">
                    <Photo variant="cover" rounded>
                      <img
                        src="https://avatars1.githubusercontent.com/u/36854142?s=460&v=4"
                        alt=""
                      />
                    </Photo>
                  </Button>
                </Item>
              </Box>
            )}
          </Spring>
        </Container>
      </StyledSidebar>
    );
  }
}
