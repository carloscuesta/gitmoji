import React from 'react'

import Layout from 'src/components/Layout'
import ContributorsList from 'src/components/ContributorsList'
import SEO from 'src/components/SEO'

const Contributors = () => (
  <>
    <SEO pageTitle="Contributors" pageUrl="/contributors" />

    <Layout>
      <section>
        <h1>Contributors</h1>

        <ContributorsList />
      </section>
    </Layout>
  </>
)

export default Contributors
