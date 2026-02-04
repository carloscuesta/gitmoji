'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './styles.module.css'

type Props = { href: string; text: string }

const MenuLink = (props: Props) => {
  const pathname = usePathname()
  const isUserOnLinkPage: boolean = props.href === pathname

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
    <Link
      className={[styles.link, isUserOnLinkPage && styles.linkActive].join(' ')}
      href={props.href}
    >
      {props.text}
    </Link>
  )
}

export default MenuLink
