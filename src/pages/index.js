import React from 'react'
import Head from 'next/head'

import { gitmojis } from 'src/data/gitmojis.json'
import GitmojiList from 'src/components/GitmojiList'
import CarbonAd from 'src/components/CarbonAd'
import SEO from 'src/components/SEO'

const Home = () => (
  <>
    <SEO />
    <main>
      <CarbonAd />
      <GitmojiList gitmojis={gitmojis} />
    </main>
  </>
)

export default Home
