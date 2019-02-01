import React from 'react'
import App, { Container } from 'next/app'
import GlobalStyle from '../components/Core/GlobalStyle'
import Head from "next/head"


export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
        <title>IT3K #16 | Popular Vote</title>
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </Container>
    )
  }
}
