import Joy from './Joy'
import Loved from './Loved'
import Sexy from './Sexy'
import Smiling from './Smiling'
import Sunglasses from './Sunglasses'
import Tongue from './Tongue'

export const LOGO_STATUSES = {
  JOY: 'JOY',
  LOVED: 'LOVED',
  SEXY: 'SEXY',
  SMILING: 'SMILING',
  SUNGLASSES: 'SUNGLASSES',
  TONGUE: 'TONGUE',
} as const

export type EmojiLogoStatus = keyof typeof LOGO_STATUSES | null

type Props = { status: EmojiLogoStatus }

const Status = (props: Props) => {
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
    default:
      return null
  }
}

export default Status
