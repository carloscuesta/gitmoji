import React from 'react'
import Head from 'next/head'

import '../styles/style.scss'
import Layout from '../components/Layout'
import GitmojiList from '../components/GitmojiList'
import SEO from '../components/SEO'
import { gitmojis } from '../data/gitmojis.json'

const Home = () => {
  const [layout, setLayout] = React.useState('grid')

  return (
    <>
      <SEO />
      <Layout headerWithSocialButtons layout={layout}>
        <GitmojiList
          gitmojis={gitmojis}
          layout={layout}
          setLayout={setLayout}
        />
      </Layout>
    </>
  )
}

export default Home
