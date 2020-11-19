import React from 'react'
import Head from 'next/head'

import Layout from 'src/components/Layout'
import GitmojiList from 'src/components/GitmojiList'
import SEO from 'src/components/SEO'
import { gitmojis } from 'src/data/gitmojis.json'

const Home = () => (
  <>
    <SEO />
    <Layout headerWithSocialButtons>
      <GitmojiList gitmojis={gitmojis} />
    </Layout>
  </>
)

export default Home
