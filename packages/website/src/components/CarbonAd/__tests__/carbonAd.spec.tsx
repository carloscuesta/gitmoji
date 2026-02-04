import { render, waitFor } from '@testing-library/react'

import CarbonAd from '../index'
import styles from '../styles.module.css'

describe('CarbonAd', () => {
  it('should render the component with carbon ads script container', async () => {
    const { container } = render(<CarbonAd />)

    await waitFor(() => {
      const carbonAdContainer = container.querySelector(
        `.${styles.carbonContainer}`,
      )
      expect(carbonAdContainer).toBeInTheDocument()
    })
  })
})
