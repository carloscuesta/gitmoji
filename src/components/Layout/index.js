// @flow
import * as React from 'react'

import { IconDefinitions } from 'src/components/Icon'
import Header from './Header'
import Hamburger from './Hamburger'
import Footer from './Footer'

type Props = { children: React.Node }

const Layout = (props: Props): React.Node => (
  <>
    <IconDefinitions />
    <Hamburger />
    <Header withHeadline />
    <main className="wrap">{props.children}</main>
    <Footer />
  </>
)

export default Layout
