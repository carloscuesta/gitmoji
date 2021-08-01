import React from 'react'

import ContributorsList from 'src/components/ContributorsList'
import CarbonAd from 'src/components/CarbonAd'
import SEO from 'src/components/SEO'

type Props = {
  contributors: Array<{ avatar: string, url: string, id: string }>,
}

const Contributors = (props: Props) => (
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

export const getStaticProps = async (): Promise<Props> => {
  const response = await fetch(
    'https://api.github.com/repos/carloscuesta/gitmoji/contributors'
  )
  const contributors = await response.json()

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
