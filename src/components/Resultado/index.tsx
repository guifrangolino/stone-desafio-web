import axios from "axios"
import { ArrowLeft } from "../icons/ArrowLeft"
import { Container, ResultadoInfo, ResultadoValor } from "./style"
import { useQuery } from '@tanstack/react-query'

type ResultadoProps = {
  setSubmited: (arg0: boolean) => void
  valor: number
  taxa: number
  tipo: string
}

type DataProps = {
  bid: number
}

export function Resultado({ setSubmited, valor, taxa, tipo }: ResultadoProps) {
  const { data } = useQuery<DataProps>(
    ['resultado'],
    async () => {
      const response = await axios.get('https://economia.awesomeapi.com.br/last/USD-BRL')
      return response.data.USDBRL
    }
  )

  const valorComTaxa = valor + ((taxa / 100) * valor)
  const valorIOF = tipo === 'dinheiro' ? 1.1 : 5.38

  function calcularResultado(valorEmDolar: number) {
    if (data?.bid) {
      const formatNumber = new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2, style: 'currency', currency: 'BRL' })
      const result = valorEmDolar * data.bid
      return formatNumber.format(result)
    }
  }

  return (
    <Container>
      <button onClick={() => setSubmited(false)}>
        <ArrowLeft />
        Voltar
      </button>

      <ResultadoValor>
        <p>O resultado do cálculo é</p>
        <span>{calcularResultado(valorComTaxa + ((valorIOF / 100) * valorComTaxa))}</span>
      </ResultadoValor>

      <ResultadoInfo>
        <p>Compra no dinheiro e taxa de <span>{tipo === 'dinheiro' ? '1.1% (taxa da aquisição do dinheiro)' : '5.38%'}</span></p>
        <p>Cotação do dólar: <span>$1,00 = R$ {calcularResultado(1)}</span></p>
      </ResultadoInfo>
    </Container>
  )
}