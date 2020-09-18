// @flow
import React, { type Element } from 'react'

import Contributor from './Contributor'

const ContributorsList = (): Element<'div'> => {
  const [contributors, setContributors] = React.useState([])

  React.useEffect(() => {
    const fetchContributors = async () => {
      const response = await fetch(
        'https://api.github.com/repos/carloscuesta/gitmoji/contributors'
      )
      const contributors = await response.json()

      setContributors(
        contributors.filter((contributor) => !contributor.login.includes('bot'))
      )
    }

    fetchContributors()
  }, [])

  return (
    <div className="row center-xs">
      {contributors.map((contributor) => (
        <Contributor
          key={contributor.id}
          profile={contributor.html_url}
          avatar={contributor.avatar_url}
        />
      ))}
    </div>
  )
}

export default ContributorsList
