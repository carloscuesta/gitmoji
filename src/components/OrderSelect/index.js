// @flow
import React from 'react'

type Props = { onChange: function }

const OrderSelect = (props: Props) => (
    <div className="order-select-wrapper">
        <ins>🔀</ins>
        <select
            className="order-select order-select-pink"
            onChange={event => props.onChange(event.target.value)}
        >
            <option value="default">Default order</option>
            <option value="name">Emoji name</option>
            <option value="description">Description</option>
        </select>
    </div>
)

export default OrderSelect
