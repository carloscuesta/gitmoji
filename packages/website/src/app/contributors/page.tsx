import type { Metadata } from 'next'

import ContributorsList from 'src/components/ContributorsList'
import CarbonAd from 'src/components/CarbonAd'

export const metadata: Metadata = {
  title: 'gitmoji | Contributors | An emoji guide for your commit messages',
  alternates: {
    canonical: '/contributors',
  },
}

type Contributor = {
  avatar: string
  id: string
  url: string
}

type GitHubContributor = {
  avatar_url: string
  id: string
  html_url: string
  login: string
}

async function getContributors(): Promise<Contributor[]> {
  const response = await fetch(
    'https://api.github.com/repos/carloscuesta/gitmoji/contributors',
    { next: { revalidate: 3600 * 3 } },
  )
  const contributors: GitHubContributor[] = await response.json()

  return contributors
    .filter((contributor) => !contributor.login.includes('bot'))
    .map((contributor) => ({
      avatar: contributor.avatar_url,
      id: contributor.id,
      url: contributor.html_url,
    }))
}

export default async function Contributors() {
  const contributors = await getContributors()

  return (
    <main>
      <CarbonAd />
      <section>
        <h1>Contributors</h1>

        <ContributorsList contributors={contributors} />
      </section>
    </main>
  )
}
