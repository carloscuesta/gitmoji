import type { AppProps as NextAppProps } from 'next/app'

export const appProps = {
  Component: (props: NextAppProps) => <div {...props}>Component</div>,
  pageProps: { test: '' },
}

export const contributors = [
  {
    url: 'https://github.com/profile',
    avatar: 'https://github.com/avatar',
    id: 'contributor-id-123',
  },
]

export const contributorsMock = [
  {
    html_url: 'https://github.com/profile',
    avatar_url: 'https://github.com/avatar',
    id: 'contributor-id-123',
    login: 'carloscuesta',
  },
]
