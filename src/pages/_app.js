// @flow
import React, { type Node } from 'react'

import Layout from 'src/components/Layout'
import theme from 'src/utils/theme/theme.css'

type Props = { Component: typeof React.Component, pageProps: Object }

const App = (props: Props): Node => (
  <Layout>
    <props.Component {...props.pageProps} />
  </Layout>
)

export default App
