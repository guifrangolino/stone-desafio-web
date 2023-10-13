import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Form } from './index'

describe('Form', async () => {
  const setSubmited = () => { }
  const setValor = () => { }
  const setTaxa = () => { }
  const setTipo = () => { }

  it('Deve renderizar o form', () => {
    render(<Form setSubmited={setSubmited} setTaxa={setTaxa} setTipo={setTipo} setValor={setValor} />)
  })
})