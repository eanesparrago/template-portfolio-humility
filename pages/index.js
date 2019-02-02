import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Spring, Trail } from "react-spring";
import { Sidebar, Card } from "../components/compounds";
import { Item, Box, Container, Area } from "../components/layout";

const StyledWrapper = styled.div`
  .container-wrapper-main {
    display: flex;
    align-items: flex-start;
  }

  .area-wrapper-sidebar {
    min-width: ${p => p.theme.incrementFixed(12)};
  }

  .area-wrapper-card {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }

  .item-wrapper-sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
  }
`;

const cardList = [1, 2, 3, 4, 5, 6, 7, 8];

export default class extends Component {
  render() {
    return (
      <StyledWrapper>
        <Container name="wrapper-main">
          <Area name="wrapper-sidebar">
            <Item name="wrapper-sidebar">
              <Sidebar />
            </Item>
          </Area>

          <Area name="wrapper-card" padding="inset-base">
            <Trail
              delay={800}
              native
              items={cardList}
              keys={cardList => cardList}
              from={{ transform: "scale(0.5) translateY(6em) translateX(6em)", opacity: "0" }}
              to={{ transform: "scale(1) translateY(0) translateX(0)", opacity: "1" }}
            >
              {item => props => (
                <Item key={item} style={props} animate margin="wrap-base">
                  <Card />
                </Item>
              )}
            </Trail>
          </Area>
        </Container>
      </StyledWrapper>
    );
  }
}
