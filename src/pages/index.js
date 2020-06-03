import React from 'react'
import Head from 'next/head'

import '../styles/style.scss'
import Layout from '../components/Layout'
import GitmojiList from '../components/GitmojiList'
import SEO from '../components/SEO'
import { gitmojis } from '../data/gitmojis.json'

const Home = () => (
  <>
    <SEO />
    <Layout headerWithSocialButtons>
      <GitmojiList gitmojis={gitmojis} />
    </Layout>
  </>
)

export default Home
