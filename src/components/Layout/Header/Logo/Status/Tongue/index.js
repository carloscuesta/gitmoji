// @flow
import React, { type Element } from 'react'

export const Tongue = (): Element<'g'> => (
  <g id="tongue" transform="translate(304 32)">
    <g id="Group">
      <ellipse id="Oval" rx={39} ry={39} cy={39} cx={39} fill="#FFDD67" />
      <path
        id="Shape"
        fill="#fff"
        d="m38 29.4c0 7.1-5.8 13-13 13s-13-5.9-13-13c0-7.2 5.8-13 13-13s13 5.8 13 13z"
      />
      <ellipse id="Oval" rx="5.85" ry="5.85" cy="29.4" cx={25} fill="#664E27" />
      <path
        id="Shape"
        fill="#664E27"
        d="m63.7 35.3c-2.5-5.3-6.1-8-9.7-8-3.7 0-7.3 2.7-9.8 8-0.2 0.5 1 1.5 1.7 0.9 2.3-1.9 5.1-2.7 8.1-2.7 2.9 0 5.7 0.8 8 2.7 0.7 0.6 1.9-0.4 1.7-0.9z"
      />
      <g id="Shape" transform="translate(16.9 46.8)">
        <path
          d="m42.7 0h-41.2c-0.989 0-1.5 0.659-1.5 1.3 0.0013 9.5 7.75 19.5 22.1 19.5s22.1-10 22.1-19.5c0-0.641-0.5-1.3-1.5-1.3z"
          fill="#664E27"
        />
        <path
          d="m34 7.8h-11.9-11.9c-0.95 0-1.1 0.41-1.1 1.1v5.2c0 11.4 5.8 17.1 13 17.1s13-5.7 13-17.1v-5.2c0-0.69-0.1-1.1-1.1-1.1z"
          fill="#FF717F"
        />
        <polygon points="24 7.8 22.1 25.7 20.2 7.8" fill="#E2596C" />
      </g>
    </g>
  </g>
)

export default Tongue
