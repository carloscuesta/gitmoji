// @flow
import React, { type Node, type Element } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './styles.module.css'

type Props = { href: string, text: string }

const MenuLink = (props: Props): Node | Element<'a'> => {
  const router: { pathname: string } = useRouter()
  const isUserOnLinkPage: boolean = props.href === router.pathname

  if (!props.href.startsWith('/')) {
    return (
      <a
        className={styles.link}
        href={props.href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {props.text}
      </a>
    )
  }

  return (
    <Link href={props.href}>
      <a
        className={[styles.link, isUserOnLinkPage && styles.linkActive].join(
          ' '
        )}
      >
        {props.text}
      </a>
    </Link>
  )
}

export default MenuLink
