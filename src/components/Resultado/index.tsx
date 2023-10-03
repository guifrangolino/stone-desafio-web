import { ArrowLeft } from "../icons/ArrowLeft"
import { Container, ResultadoInfo, ResultadoValor } from "./style"

type ResultadoProps = {
  setSubmited: (arg0: boolean) => void
  valor: number | null
  taxa: number | null
}

export function Resultado({ setSubmited, valor, taxa }: ResultadoProps) {
  return (
    <Container>
      <button onClick={() => setSubmited(false)}>
        <ArrowLeft />
        Voltar
      </button>

      <ResultadoValor>
        <p>O resultado do cálculo é</p>
        <span>R$ 240,56</span>
      </ResultadoValor>

      <ResultadoInfo>
        <p>Compra no dinheiro e taxa de <span>5.3%</span></p>
        <p>Cotação do dólar: <span>$1,00 = R$ 5,20</span></p>
      </ResultadoInfo>
    </Container>
  )
}