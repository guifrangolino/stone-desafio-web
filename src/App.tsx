import { useState } from "react"
import { Elipse } from "./components/Elipse"
import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Resultado } from "./components/Resultado"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "styled-components"
import defaultTheme from "./styles/themes/defaultTheme"

const queryClient = new QueryClient()

function App() {
  const [valor, setValor] = useState<number>(0)
  const [taxa, setTaxa] = useState<number>(0)
  const [tipo, setTipo] = useState<string>('dinheiro')
  const [submited, setSubmited] = useState(false)

  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <Main>
          <Header />
          <Elipse />
          {submited ? <Resultado valor={valor} taxa={taxa} tipo={tipo} setSubmited={setSubmited} /> : <Form setSubmited={setSubmited} setValor={setValor} setTaxa={setTaxa} setTipo={setTipo} />}
        </Main>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
