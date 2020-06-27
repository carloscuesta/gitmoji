// @flow
import React, { type Element } from 'react'

export const IconDefinitions = (): Element<'svg'> => (
  <svg
    style={{ position: 'absolute', width: 0, height: 0 }}
    width={0}
    height={0}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <symbol id="icon-heart" viewBox="0 0 64 64">
        <title>heart</title>
        <path
          className="heart"
          d="m61.1 18.2c-6.4-17-27.2-9.4-29.1-.9-2.6-9-22.9-15.7-29.1.9-6.9 18.5 26.7 35.1 29.1 37.8 2.4-2.2 36-19.6 29.1-37.8"
          fill="#ff5a79"
        />
      </symbol>
      <symbol id="icon-star" viewBox="0 0 64 64">
        <title>star</title>
        <path
          className="twitter"
          d="M62,25.2H39.1L32,3l-7.1,22.2H2l18.5,13.7l-7,22.1L32,47.3L50.5,61l-7.1-22.2L62,25.2z"
          fill="#FFDD67"
        />
      </symbol>
      <symbol id="icon-twitter" viewBox="0 0 64 64">
        <title>twitter</title>
        <g fill="#42ade2">
          <path d="m59.8 24.3c0 0 1.1-6.2-3.5-3.4 0 0-.4-6.3-4.3-1.9 0 0-2.1-3.9-4.4-.3-3.1 4.8-5.2 12.4-3.2 25l3.8-2.5c2.7-7.9 12.4-8.8 13.7-13.1.9-3-2.1-3.8-2.1-3.8" />
          <path d="m22.1 17.6l-9.9 3.6c2.2-12 16.6-11.2 16.6-11.2s-6.8 3.2-6.7 7.6" />
          <path d="m23.7 19.8l-10.5 1.4c4.8-11.2 18.7-7.3 18.7-7.3s-7.3 1.6-8.2 5.9" />
        </g>
        <g fill="#ffd93b">
          <path d="m2 29l5.4-1.4v3.6c0-.1-3.3-.6-5.4-2.2" />
          <path d="M7.4,27.5L2,24.8c3.6-2.8,7.7-1.9,7.7-1.9L7.4,27.5z" />
        </g>
        <g fill="#e08828">
          <path d="m33.8 53h-2.1v7.9c-.3.1-2.1-.1-2.9-.1-1.8 0-3.3 1.3-3.3 1.3h8.3v-9.1" />
          <path d="m25 53h-2.1v7.9c-.3.1-2.1-.1-2.9-.1-1.8 0-3.3 1.3-3.3 1.3h8.3v-9.1" />
          <path
            d="m54 36.2c3.9 0-4.1 17.5-23.3 17.5-13 0-23.9-5.2-23.9-21.5 0-10.1 6.4-18.3 19.5-15 13.3 3.5 6.5 19 27.7 19"
            fill="#42ade2"
          />
          <path
            d="m37.6 51.7c-15.6 0-14-12-27.9-11.2 5.1 15.8 27.9 11.2 27.9 11.2"
            fill="#fff"
          />
          <path
            d="m39.1 29.2c-10-9.8-20.2 6.2-7.9 12.6 12.1 6.2 20.4-4.8 20.4-4.8s-6.1-1.5-12.5-7.8"
            fill="#297b9d"
          />
        </g>
        <circle cx="15.1" cy="24.9" r="2.5" fill="#3e4347" />
      </symbol>
      <symbol id="icon-grid" x="0px" y="0px" viewBox="0 0 512 512">
        <title>grid</title>
        <path
          fill="currentColor"
          d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM197.3 72h117.3v96H197.3zm0 136h117.3v96H197.3zm-40 232H52c-6.6 0-12-5.4-12-12v-84h117.3zm0-136H40v-96h117.3zm0-136H40V84c0-6.6 5.4-12 12-12h105.3zm157.4 272H197.3v-96h117.3v96zm157.3 0H354.7v-96H472zm0-136H354.7v-96H472zm0-136H354.7V72H472z"
        ></path>
      </symbol>
      <symbol id="icon-list" x="0px" y="0px" viewBox="0 0 512 512">
        <title>list</title>
        <path
          fill="currentColor"
          d="M0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48H48C21.49 32 0 53.49 0 80zm472 224H197.333v-96H472v96zm0 40v84c0 6.627-5.373 12-12 12H197.333v-96H472zM40 208h117.333v96H40v-96zm157.333-40V72H460c6.627 0 12 5.373 12 12v84H197.333zm-40-96v96H40V84c0-6.627 5.373-12 12-12h105.333zM40 344h117.333v96H52c-6.627 0-12-5.373-12-12v-84z"
        ></path>
      </symbol>
    </defs>
  </svg>
)
