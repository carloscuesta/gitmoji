import React from 'react'
import Head from 'next/head'

import GitmojiList from 'src/components/GitmojiList'
import SEO from 'src/components/SEO'
import { gitmojis } from 'src/data/gitmojis.json'

const Home = () => (
  <>
    <SEO />
    <main>
      <GitmojiList gitmojis={gitmojis} />
    </main>
  </>
)

export default Home
