import { Toaster } from 'react-hot-toast'
import gitmojis from 'gitmojis'

import GitmojiList from 'src/components/GitmojiList'
import CarbonAd from 'src/components/CarbonAd'
import SEO from 'src/components/SEO'

const Home = () => (
  <>
    <SEO />
    <main>
      <CarbonAd />
      <GitmojiList gitmojis={gitmojis.gitmojis} />
      <Toaster position="top-left" />
    </main>
  </>
)

export default Home
