import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Item, Box, Container, Area } from "../../../components/layout";
import { Typography } from "../../../components/elements";

const StyledAboutMe = styled.div`
  padding-top: ${p => p.theme.increment(4)};
  padding-left: ${p => p.theme.increment(2)};

  .item-about-me-quote {
    h1 {
      text-indent: -0.45em;
    }
    h1::before {
      content: none;
    }
  }
`;

export class AboutMe extends Component {
  static propTypes = {};

  render() {
    return (
      <StyledAboutMe>
        <Container>
          <Item name="about-me-quote" margin="stack-xl">
            <Typography as="h1">
              &ldquo;Some stars burn out and die. Bigger stars burn out and die
              with&nbsp;PASSION.&rdquo; &mdash;&nbsp;Bill Wurtz
            </Typography>
          </Item>

          <Item name="about-me-body" margin="stack-l">
            <Typography as="p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              hic veritatis quam at expedita impedit ut non perferendis iure
              illum pariatur ratione, rerum eveniet. Soluta illum totam sequi
              similique harum.
            </Typography>
          </Item>

          <Item name="about-me-body">
            <Typography as="p">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
              voluptatem corporis natus dolore rerum nemo mollitia libero itaque
              suscipit molestias repudiandae consequuntur est, dolorem illum
              iusto expedita optio, sunt ipsum!
            </Typography>
          </Item>
        </Container>
      </StyledAboutMe>
    );
  }
}

export default AboutMe;
