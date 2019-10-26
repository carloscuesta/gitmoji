import React from 'react'

import '../styles/style.scss'
import Layout from '../components/Layout'
import ContributorsList from '../components/ContributorsList'
import SEO from '../components/SEO'

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
