// @flow
import { type Node } from 'react'

import gitmojis from 'src/data/gitmojis.json'
import GitmojiList from 'src/components/GitmojiList'
import CarbonAd from 'src/components/CarbonAd'
import SEO from 'src/components/SEO'

const Home = (): Node => (
  <>
    <SEO />
    <main>
      <CarbonAd />
      <GitmojiList gitmojis={gitmojis.gitmojis} />
    </main>
  </>
)

export default Home
