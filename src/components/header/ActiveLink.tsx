import React from 'react'
import { NextRouter, withRouter } from 'next/router'
import Link from 'next/link'
import Button, { ButtonVariants } from './Button'

interface ActiveLinkProps {
  router: NextRouter
  href: string
  children?: JSX.Element
  key?: string
}

function ActiveLink ({ router, href, children, key }: ActiveLinkProps): JSX.Element {
  (function prefetchPages () {
    if (typeof window !== 'undefined') {
      router.prefetch(router.pathname).catch(() => {})
    }
  })()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault()
    router.push(href).catch(() => {})
  }

  const isCurrentPath = router.pathname === href || router.asPath === href
  const variant = isCurrentPath ? ButtonVariants.active : ButtonVariants.primary

  return (
        <Link href={href} onClick={handleClick} key={key}>
          <Button variant={variant}>
            {children}
          </Button>
        </Link>
  )
}

export default withRouter(ActiveLink)
