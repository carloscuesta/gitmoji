// @flow
import React, { type Element } from 'react'

type Props = { profile: string, avatar: string }

const Contributor = (props: Props): Element<'article'> => (
  <article className="contributor col-xs-3 col-sm-2">
    <a href={props.profile}>
      <img className="contributor-picture" src={props.avatar} />
    </a>
  </article>
)

export default Contributor
