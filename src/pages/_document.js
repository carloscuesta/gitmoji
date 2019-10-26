// @flow
import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { readFileSync } from 'fs'
import { join } from 'path'

class InlineStylesHead extends Head {
  getCssLinks() {
    return this.__getInlineStyles()
  }

  __getInlineStyles() {
    const { assetPrefix, files } = this.context._documentProps
    if (!files || files.length === 0) return null

    return files
      .filter((file) => /\.css$/.test(file))
      .map((file) => (
        <style
          key={file}
          nonce={this.props.nonce}
          data-href={`${assetPrefix}/_next/${file}`}
          dangerouslySetInnerHTML={{
            __html: readFileSync(join(process.cwd(), '.next', file), 'utf-8')
          }}
        />
      ))
  }
}

/*
  This code has been obtained from:
  https://github.com/zeit/next-plugins/issues/238#issuecomment-432211871
*/

class CustomDocument extends Document {
  render() {
    return (
      <html lang="en">
        <InlineStylesHead />
        <body>
          <Main />
          <NextScript />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `(function(a,e,f,g,b,c,d){a.GoogleAnalyticsObject=b;a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};a[b].l=1*new Date;c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");ga("create","UA-67824860-7","auto");ga("send","pageview");`
            }}
          />
        </body>
      </html>
    )
  }
}

export default CustomDocument
