// @flow
import React from 'react'

type Props = { setOrder: (order: string) => void }

const OrderSelect = (props: Props) => (
  <div className="order-select-wrapper">
    <ins>🔀</ins>
    <select
      className="order-select order-select-pink"
      onChange={(event) => props.setOrder(event.currentTarget.value)}
    >
      <option value="default">Default order</option>
      <option value="name">Emoji name</option>
      <option value="description">Description</option>
    </select>
  </div>
)

export default OrderSelect
