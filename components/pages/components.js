import React, { Component } from "react";
import { Item, Container, Area } from "../../components/layout";
import { Typography, Button } from "../../components/elements";

export default class extends Component {
  render() {
    return (
      <Container padding="inset-base">
        <Area margin="stack-xl">
          <Container margin="stack-base">
            <Typography as="h1">Heading 1</Typography>
          </Container>

          <Container margin="stack-base">
            <Typography as="h2">Heading 2</Typography>
          </Container>

          <Container margin="stack-base">
            <Typography as="h3">Heading 3</Typography>
          </Container>

          <Container margin="stack-base">
            <Typography as="p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
              nulla perferendis ipsum, suscipit non fugiat quia consequuntur
              perspiciatis cumque impedit dolor eligendi necessitatibus! Fuga
              necessitatibus eaque sunt facere impedit repellat?
            </Typography>
          </Container>

          <Container margin="stack-base">
            <Typography variant="caption">Caption</Typography>
          </Container>

          <Container margin="stack-base">
            <Typography variant="button">Button</Typography>
          </Container>
        </Area>

        <Area>
          <Item margin="stack-base">
            <Button variant="primary">Primary Button</Button>
          </Item>

          <Item>
            <Button variant="secondary">Secondary Button</Button>
          </Item>
        </Area>
      </Container>
    );
  }
}
