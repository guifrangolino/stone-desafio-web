import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Elipse } from './index'

describe('Elipse', async () => {
  it('Deve renderizar o elipse', () => {
    render(<Elipse />)
  })
})