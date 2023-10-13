import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Main } from './index'

describe('Main', async () => {

  it('Deve renderizar o main', () => {
    render(<Main />)
  })
})