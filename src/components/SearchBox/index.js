// @flow
import React, { useContext } from 'react'
import { store } from '../Store/store.js'

type Props = { value?: string }

const SearchBox = (props: Props) => {
  const globalState = useContext(store)
  const { dispatch } = globalState

  const onChange = (data) => {
    dispatch({ type: 'new value', payload: data.target.value })
  }
  return (
    <input
      maxLength="70"
      type="text"
      onChange={onChange}
      placeholder="Search your emoji"
    />
  )
}

export default SearchBox
