// @flow
import * as React from 'react'

import { IconDefinitions } from '../Icon'
import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer'

type Props = {
  headerWithSocialButtons: boolean,
  layout: 'grid' | 'list',
  children: React.Node
}

const Layout = (props: Props): React.Node => (
  <>
    <IconDefinitions />
    <Navigation />
    <Header withHeadline withSocialButtons={props.headerWithSocialButtons} />
    <main className={`wrap ${props.layout}`}>{props.children}</main>
    <Footer />
  </>
)

export default Layout
