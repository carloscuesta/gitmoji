import React, { useState } from 'react'

import '../styles/style.scss'
import Layout from '../components/Layout'
import GitmojiList from '../components/GitmojiList'
import SEO from '../components/SEO'
import { gitmojis } from '../data/gitmojis.json'

const Home = () => {
  const [order, setOrder] = useState('default')
  const sortedGitmojis =
    order !== 'default'
      ? [...gitmojis].sort((a, b) => (a[order] > b[order] ? 1 : -1))
      : gitmojis

  return (
    <>
      <SEO />
      <Layout headerWithSocialButtons setOrder={setOrder}>
        <GitmojiList gitmojis={sortedGitmojis} />
      </Layout>
    </>
  )
}

export default Home
