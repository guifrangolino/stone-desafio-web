import { useState } from "react"
import { Elipse } from "./components/Elipse"
import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Resultado } from "./components/Resultado"

function App() {
  const [valor, setValor] = useState<number | null>(null)
  const [taxa, setTaxa] = useState<number | null>(null)
  const [submited, setSubmited] = useState(false)

  return (
    <Main>
      <Header />
      <Elipse />
      {submited ? <Resultado valor={valor} taxa={taxa} setSubmited={setSubmited} /> : <Form setSubmited={setSubmited} setValor={setValor} setTaxa={setTaxa} />}
      {/* <Form />
      <Resultado /> */}
    </Main>
  )
}

export default App
