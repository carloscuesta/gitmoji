'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

type Props = {
  searchInput: string
  setSearchInput: (value: string) => void
}

/**
 * Small client component that syncs URL search params with the search input state.
 * Wrapped in Suspense to avoid CSR bailout while keeping the main list static.
 */
export default function SearchParamsSync({
  searchInput,
  setSearchInput,
}: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const search = searchParams.get('search')
    if (search) {
      setSearchInput(search)
    }
  }, [searchParams, setSearchInput])

  useEffect(() => {
    const search = searchParams.get('search')
    if (search && !searchInput) {
      router.push('/')
    }
  }, [searchInput, searchParams, router])

  return null
}
