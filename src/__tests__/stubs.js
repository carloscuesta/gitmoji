export const appProps = {
  Component: (props) => <div {...props}>Component</div>,
  pageProps: { test: '' },
}

export const request = (method) => ({ method })

export const requestWithQuery = (method, query) => ({
  ...request(method),
  query,
})

export const response = () => {
  const response = {}

  response.status = jest.fn().mockReturnValue(response)
  response.json = jest.fn().mockReturnValue(response)
  response.setHeader = jest.fn().mockReturnValue(response)
  response.status = jest.fn().mockReturnValue(response)
  response.end = jest.fn().mockReturnValue(response)

  return response
}
