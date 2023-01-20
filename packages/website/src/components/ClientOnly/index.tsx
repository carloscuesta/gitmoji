import React, { useEffect, useState } from 'react'

type Props = {
  children: React.ReactElement
}

const ClientOnly: React.FC<Props> = (props) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => setIsMounted(true), [])

  if (!isMounted) {
    return null
  }

  return props.children
}

export default ClientOnly
