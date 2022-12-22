// @flow
import { type Node } from 'react'
import gitmojis from 'gitmojis'

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
