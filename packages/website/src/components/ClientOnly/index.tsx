import React, { useEffect, useState } from 'react'

type Props = {
  children: React.ReactElement
  isTest?: boolean
}

const ClientOnly: React.FC<Props> = (props) => {
  const [isMounted, setIsMounted] = useState(props.isTest || false)

  useEffect(() => setIsMounted(true), [])

  if (!isMounted) {
    return null
  }

  return props.children
}

export default ClientOnly
