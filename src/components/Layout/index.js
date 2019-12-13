// @flow
import * as React from 'react'

import { IconDefinitions } from '../Icon'
import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer'

type Props = { headerWithSocialButtons: boolean, children: React.Node, setOrder: function }

const Layout = (props: Props) => (
  <>
    <IconDefinitions />
    <Navigation />
    <Header
        withHeadline
        withSocialButtons={props.headerWithSocialButtons}
        setOrder={props.setOrder}
    />
    <main className="wrap">{props.children}</main>
    <Footer />
  </>
)

export default Layout
