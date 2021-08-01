export const appProps = {
  Component: (props) => <div {...props}>Component</div>,
  pageProps: { test: '' },
}

export const request = (method) => ({ method })

export const response = () => {
  const response = {}

  response.status = jest.fn().mockReturnValue(response)
  response.json = jest.fn().mockReturnValue(response)
  response.setHeader = jest.fn().mockReturnValue(response)
  response.status = jest.fn().mockReturnValue(response)
  response.end = jest.fn().mockReturnValue(response)

  return response
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
