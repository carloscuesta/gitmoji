import { Suspense } from 'react'
import { Toaster } from 'react-hot-toast'
import { gitmojis } from 'gitmojis'

import GitmojiList from 'src/components/GitmojiList'
import CarbonAd from 'src/components/CarbonAd'

export default function Home() {
  return (
    <main>
      <CarbonAd />
      <Suspense fallback={null}>
        <GitmojiList gitmojis={gitmojis} />
      </Suspense>
      <Toaster position="top-left" />
    </main>
  )
}
