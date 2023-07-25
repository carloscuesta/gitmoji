import { GetStaticProps, InferGetStaticPropsType } from 'next'

import ContributorsList from 'src/components/ContributorsList'
import CarbonAd from 'src/components/CarbonAd'
import SEO from 'src/components/SEO'

type Contributor = {
  avatar: string
  id: string
  url: string
}

const Contributors = (
  props: InferGetStaticPropsType<typeof getStaticProps>,
) => (
  <>
    <SEO pageTitle="Contributors" pageUrl="/contributors" />

    <main>
      <CarbonAd />
      <section>
        <h1>Contributors</h1>

        <ContributorsList contributors={props.contributors} />
      </section>
    </main>
  </>
)

export const getStaticProps: GetStaticProps<{
  contributors: Contributor[]
}> = async () => {
  type GitHubContributor = {
    avatar_url: string
    id: string
    html_url: string
    login: string
  }
  const response = await fetch(
    'https://api.github.com/repos/carloscuesta/gitmoji/contributors',
  )
  const contributors: GitHubContributor[] = await response.json()

  return {
    props: {
      contributors: contributors
        .filter((contributor) => !contributor.login.includes('bot'))
        .map((contributor) => ({
          avatar: contributor.avatar_url,
          id: contributor.id,
          url: contributor.html_url,
        })),
    },
    revalidate: 3600 * 3,
  }
}

export default Contributors
