import React from 'react'

import ContributorsList from 'src/components/ContributorsList'
import CarbonAd from 'src/components/CarbonAd'
import SEO from 'src/components/SEO'

const Contributors = () => (
  <>
    <SEO pageTitle="Contributors" pageUrl="/contributors" />

    <main>
      <CarbonAd />
      <section>
        <h1>Contributors</h1>

        <ContributorsList />
      </section>
    </main>
  </>
)

export default Contributors
