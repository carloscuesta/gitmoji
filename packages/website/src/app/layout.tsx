import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'

import Layout from 'src/components/Layout'
import 'src/utils/theme/theme.css'

export const metadata: Metadata = {
  title: 'gitmoji | An emoji guide for your commit messages',
  description:
    "Gitmoji is an emoji guide for your commit messages. Aims to be a standarization cheatsheet for using emojis on GitHub's commit messages.",
  authors: [{ name: 'Carlos Cuesta', url: 'https://carloscuesta.me' }],
  keywords: ['gitmoji', 'emoji', 'carloscuesta', 'commit'],
  metadataBase: new URL('https://gitmoji.dev'),
  alternates: {
    canonical: '/',
  },
  robots: 'index, follow',
  openGraph: {
    title: 'gitmoji',
    description: 'An emoji guide for your commit messages.',
    url: 'https://gitmoji.dev',
    images: [
      {
        url: 'https://gitmoji.dev/static/gitmoji.gif',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'gitmoji',
    description: 'An emoji guide for your commit messages.',
    creator: '@crloscuesta',
    images: ['https://gitmoji.dev/static/gitmoji.gif'],
  },
  icons: {
    icon: [
      { url: '/static/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/static/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/static/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      {
        url: '/static/android-icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
    apple: [
      { url: '/static/apple-icon-57x57.png', sizes: '57x57' },
      { url: '/static/apple-icon-60x60.png', sizes: '60x60' },
      { url: '/static/apple-icon-72x72.png', sizes: '72x72' },
      { url: '/static/apple-icon-76x76.png', sizes: '76x76' },
      { url: '/static/apple-icon-114x114.png', sizes: '114x114' },
      { url: '/static/apple-icon-120x120.png', sizes: '120x120' },
      { url: '/static/apple-icon-144x144.png', sizes: '144x144' },
      { url: '/static/apple-icon-152x152.png', sizes: '152x152' },
      { url: '/static/apple-icon-180x180.png', sizes: '180x180' },
    ],
  },
  manifest: '/static/manifest.json',
  other: {
    'msapplication-TileColor': '#FFDD67',
    'msapplication-TileImage': '/ms-icon-144x144.png',
    'google-site-verification': '78vmlhi_erc-UGybxcGwHyiUtf04wzYExTLa-4LoWio',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#FFDD67" />
        <link
          rel="search"
          type="application/opensearchdescription+xml"
          href="/static/opensearchdescription.xml"
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(a,e,f,g,b,c,d){a.GoogleAnalyticsObject=b;a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};a[b].l=1*new Date;c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");ga("create","UA-67824860-7","auto");ga("send","pageview");`,
          }}
        />
      </head>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="light">
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  )
}
