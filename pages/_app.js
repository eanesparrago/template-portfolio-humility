import React, { Fragment } from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import NProgress from "nprogress";
import Router from "next/router";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import style from "../config/style";

// >>> Update progress bar on router events
Router.events.on("routeChangeStart", url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

// >>> Global styles
const GlobalStyle = createGlobalStyle`
  :root {
    --size-xs: ${style.size.xs};
    --size-s: ${style.size.s};
    --size-m: ${style.size.m};
    --size-l: ${style.size.l};
    --size-xl: ${style.size.xl};
    --size-base: ${style.size.base};
    --size-base-fixed: ${style.size.base};
    --size-button: auto;


    @media (max-width: ${style.breakpoint.tabletLarge}) {
      --size-button: 3rem;
    } 

    @media (max-width: ${style.breakpoint.tabletSmall}) {
      --size-xs: ${style.sizeMobile.xs};
      --size-s: ${style.sizeMobile.s};
      --size-m: ${style.sizeMobile.m};
      --size-l: ${style.sizeMobile.l};
      --size-xl: ${style.sizeMobile.xl};
      --size-base: ${style.sizeMobile.base};
    } 
  }

  html, body, #__next {

}

html {
  font-size: 16px;
}

body {
  color: ${style.color.dark};
  font-family: ${style.font.family.primary};
  font-size: 16px;
  background-color: ${style.color.light};
}
`;

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Fragment>
        <Head>
          <title>LJEsp | Next.js Basic Boilerplate</title>
        </Head>

        <ThemeProvider theme={style}>
          <Container>
            <GlobalStyle />
            <Component {...pageProps} />
          </Container>
        </ThemeProvider>
      </Fragment>
    );
  }
}
