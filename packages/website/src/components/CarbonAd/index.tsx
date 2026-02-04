'use client'

import { useRef, useEffect } from 'react'

import styles from './styles.module.css'

const CarbonAd = () => {
  const adsContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!adsContainer.current || typeof window === 'undefined') {
      return
    }

    const existingScript = document.getElementById('_carbonads_js')

    if (existingScript) {
      const existingAd = document.getElementById('carbonads')

      if (existingAd && adsContainer.current) {
        adsContainer.current.appendChild(existingAd)
      }

      return
    }

    const carbonAdsScript = document.createElement('script')
    carbonAdsScript.src =
      '//cdn.carbonads.com/carbon.js' + '?serve=CE7DL5QJ&placement=gitmojidev'
    carbonAdsScript.async = true
    carbonAdsScript.id = '_carbonads_js'

    adsContainer.current.appendChild(carbonAdsScript)

    return () => {}
  }, [])

  return (
    <div className="col-xs-12">
      <div
        ref={adsContainer}
        className={`${styles.carbonContainer} row center-xs`}
      />
    </div>
  )
}

export default CarbonAd
