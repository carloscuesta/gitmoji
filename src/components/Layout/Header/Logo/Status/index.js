// @flow
import React, { type Node } from 'react'

import Joy from './Joy'
import Loved from './Loved'
import Sexy from './Sexy'
import Smiling from './Smiling'
import Sunglasses from './Sunglasses'
import Tongue from './Tongue'

export const LOGO_STATUSES: Object = {
  JOY: 'joy',
  LOVED: 'loved',
  SEXY: 'sexy',
  SMILING: 'smiling',
  SUNGLASSES: 'sunglasses',
  TONGUE: 'tongue',
}

type Props = { status: $Keys<typeof LOGO_STATUSES> }

const Status = (props: Props): Node => {
  switch (props.status) {
    case LOGO_STATUSES.JOY:
      return <Joy />
    case LOGO_STATUSES.LOVED:
      return <Loved />
    case LOGO_STATUSES.SEXY:
      return <Sexy />
    case LOGO_STATUSES.SMILING:
      return <Smiling />
    case LOGO_STATUSES.SUNGLASSES:
      return <Sunglasses />
    case LOGO_STATUSES.TONGUE:
      return <Tongue />
  }

  return null
}

export default Status
