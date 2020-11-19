// @flow
import React, { type Node } from 'react'

import theme from 'src/utils/theme/theme.css'

type Props = { Component: typeof React.Component, pageProps: Object }

const App = (props: Props): Node => <props.Component {...props.pageProps} />

export default App
