import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Resultado } from './index'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

describe('Resultado', async () => {
  const queryClient = new QueryClient()
  const setSubmited = () => { }

  it('Deve renderizar o resultado', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Resultado setSubmited={setSubmited} valor={10} taxa={1} tipo='dinheiro' />
      </QueryClientProvider>
    )
  })
})