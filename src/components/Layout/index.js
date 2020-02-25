// @flow
import * as React from 'react'

import { StateProvider } from '../Store/store'
import { IconDefinitions } from '../Icon'
import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer'

type Props = { headerWithSocialButtons: boolean, children: React.Node }
const StoreContext = React.createContext()

const Layout = (props: Props) => (
  <>
    <StateProvider>
      <IconDefinitions />
      <Navigation />
      <Header withHeadline withSocialButtons={props.headerWithSocialButtons} />
      <main className="wrap">{props.children}</main>
      <Footer />
    </StateProvider>
  </>
)

export default Layout
