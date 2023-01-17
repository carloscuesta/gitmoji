import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react'

import Layout from 'src/components/Layout'
import 'src/utils/theme/theme.css'

const App = (props: AppProps) => (
  <ThemeProvider>
    <Layout>
      <props.Component {...props.pageProps} />
      <Analytics />
    </Layout>
  </ThemeProvider>
)

export default App
