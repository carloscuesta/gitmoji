import Head from 'next/head'

type Props = { pageTitle?: string; pageUrl?: string }

const SEO = (props: Props) => (
  <Head>
    <title>
      {`gitmoji ${
        props.pageTitle ? '| ' + props.pageTitle + ' |' : '|'
      } An emoji guide for your commit messages`}
    </title>
    <link rel="canonical" href={`https://gitmoji.dev${props.pageUrl || ''}`} />
    <meta name="author" content="Carlos Cuesta" />
    <meta
      name="description"
      content="Gitmoji is an emoji guide for your commit messages. Aims to be a standarization cheatshee /t for using emojis on GitHub's commit messages."
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="gitmoji" />
    <meta
      name="twitter:description"
      content="An emoji guide for your commit messages."
    />
    <meta
      name="twitter:image"
      content="https://gitmoji.dev/static/gitmoji.gif"
    />
    <meta name="twitter:creator" content="@crloscuesta" />
    <meta name="twitter:url" content="https://gitmoji.dev" />
    <meta property="og:title" content="gitmoji" />
    <meta
      name="og:description"
      content="An emoji guide for your commit messages."
    />
    <meta
      property="og:image"
      content="https://gitmoji.dev/static/gitmoji.gif"
    />
    <meta name="og:url" content="https://gitmoji.dev" />
    <meta name="robots" content="index, follow" />
    <link
      rel="apple-touch-icon"
      sizes="57x57"
      href="/static/apple-icon-57x57.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="60x60"
      href="/static/apple-icon-60x60.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="72x72"
      href="/static/apple-icon-72x72.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="76x76"
      href="/static/apple-icon-76x76.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="114x114"
      href="/static/apple-icon-114x114.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="120x120"
      href="/static/apple-icon-120x120.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="144x144"
      href="/static/apple-icon-144x144.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="152x152"
      href="/static/apple-icon-152x152.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/static/apple-icon-180x180.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="/static/android-icon-192x192.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/static/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="96x96"
      href="/static/favicon-96x96.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/static/favicon-16x16.png"
    />
    <link rel="manifest" href="/static/manifest.json" />
    <meta name="msapplication-TileColor" content="#FFDD67" />
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    <meta name="theme-color" content="#FFDD67" />
    <meta
      name="google-site-verification"
      content="78vmlhi_erc-UGybxcGwHyiUtf04wzYExTLa-4LoWio"
    />
    <link
      rel="search"
      type="application/opensearchdescription+xml"
      href="/static/opensearchdescription.xml"
    />
  </Head>
)

export default SEO
