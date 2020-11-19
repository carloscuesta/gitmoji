// @flow
import React, { type Element } from 'react'

import Button from 'src/components/Button'
import Logo from './Logo'

type Props = { withHeadline: boolean, withSocialButtons: boolean }

const Header = (props: Props): Element<'header'> => (
  <header className="header">
    <Logo />
    {props.withHeadline && <h2>An emoji guide for your commit messages</h2>}
    {props.withSocialButtons && (
      <div className="header-buttons">
        <Button
          icon="star"
          link="https://github.com/carloscuesta/gitmoji"
          text="GitHub"
        />
        <Button
          icon="twitter"
          link={
            'https://twitter.com/intent/tweet?text=gitmoji' +
            '%20%E2%80%93%20An%20%23emoji%20guide%20for%20your%20commit' +
            '%20messages%20by%20%40crloscuesta%20%F0%9F%98%8D%F0%9F%98%9C' +
            '&url=https://gitmoji.carloscuesta.me'
          }
          target="_blank"
          text="Tweet"
        />
      </div>
    )}
  </header>
)

export default Header
