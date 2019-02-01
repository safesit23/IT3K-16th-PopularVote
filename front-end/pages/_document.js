import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()

    const originalRenderPage = ctx.renderPage
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
      })

    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: [...initialProps.styles, ...sheet.getStyleElement()]
    }
  }

  render() {
    return (
      <html>
        <Head>
          <link rel='icon' href='/static/img/logoIT3K-v2.png' sizes='32x32'/>
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0, shrink-to-fit=no" />
          <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" charSet="UTF-8" href="/static/css/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <link rel="stylesheet" type="text/css" href="/static/css/antd.min.css" />
          <script src="https://as.alipayobjects.com/g/component/??es6-shim/0.35.1/es6-sham.min.js,es6-shim/0.35.1/es6-shim.min.js"></script>
        </Head>
        <body>
          <NextScript />
          <Main />
        </body>
      </html>
    )
  }
}
