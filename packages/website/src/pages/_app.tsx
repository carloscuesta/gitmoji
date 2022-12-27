import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import Layout from 'src/components/Layout'
import 'src/utils/theme/theme.css'

const App = (props: AppProps) => (
  <ThemeProvider>
    <Layout>
      <props.Component {...props.pageProps} />
    </Layout>
  </ThemeProvider>
)

export default App
