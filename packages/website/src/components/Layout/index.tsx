import { IconDefinitions } from 'src/components/Icon'
import Header from './Header'
import Hamburger from './Hamburger'
import Footer from './Footer'

type Props = { children: JSX.Element[] | JSX.Element }

const Layout = (props: Props) => (
  <>
    <IconDefinitions />
    <Hamburger />
    <Header withHeadline />
    <main className="wrap">{props.children}</main>
    <Footer />
  </>
)

export default Layout
