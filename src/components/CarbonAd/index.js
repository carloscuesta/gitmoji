// @flow
import React, { type Element } from 'react'

const CarbonAd = (): Element<'div'> => (
  <div className="col-xs-12">
    <style global jsx>
      {`
        #carbonads {
          display: block;
          overflow: hidden;
          max-width: 728px;
          border-radius: 4px;
          position: relative;
          box-shadow: 0 1px 2px 0 var(--cardShadow);
        }

        #carbonads > span {
          display: block;
        }

        #carbonads a {
          color: inherit;
          text-decoration: none;
        }

        #carbonads a:hover {
          color: inherit;
        }

        .carbon-wrap {
          display: flex;
          align-items: center;
        }

        .carbon-img {
          display: block;
          margin: 0;
          line-height: 1;
        }

        .carbon-img img {
          display: block;
          height: 90px;
          width: auto;
        }

        .carbon-text {
          display: block;
          padding: 0 1em;
          line-height: 1.35;
          text-align: center;
          width: 100%;
          font-size: 14px;
        }

        .carbon-poweredby {
          display: block;
          position: absolute;
          bottom: 0;
          right: 0;
          padding: 6px 10px;
          background: #f1f1f1;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
          font-size: 8px;
          border-top-left-radius: 4px;
          line-height: 1;
        }

        #carbonads a:hover {
          animation: none;
        }

        .carbon-container {
          height: 90px;
        }
      `}
    </style>
    <div className="carbon-container row center-xs">
      <script
        async
        src="//cdn.carbonads.com/carbon.js?serve=CE7DL5QJ&placement=gitmojicarloscuestame"
        id="_carbonads_js"
        type="text/javascript"
      />
    </div>
  </div>
)

export default CarbonAd
