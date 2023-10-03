import { TransferArrow } from "../icons/TransferArrow";
import { Container, TipoCompraContainer, ValorContainer } from "./style";
import { FormEvent, useRef, useState } from "react"
import CurrencyInput from 'react-currency-input-field';

type FormProps = {
  setSubmited: (arg0: boolean) => void
  setValor: (arg0: number) => void
  setTaxa: (arg0: number) => void
  setTipo: (arg0: string) => void
}

export function Form({ setSubmited, setValor, setTaxa, setTipo }: FormProps) {
  const valor = useRef<number | null>(null)
  const taxa = useRef<number | null>(null)
  const [tipoCompra, setTipoCompra] = useState<string>('dinheiro')
  const [formValido, setFormValido] = useState(false)

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (valor.current === null || taxa.current === null) return

    setValor(valor.current)
    setTaxa(taxa.current)
    setTipo(tipoCompra)
    setSubmited(true)
  }

  function isFormValido() {
    valor.current && (taxa.current || taxa.current === 0) ? setFormValido(true) : setFormValido(false)
  }

  return (
    <Container onSubmit={handleSubmit}>

      <ValorContainer>
        <div>
          <label htmlFor="dolar">Dólar</label>
          <CurrencyInput
            id="dolar"
            prefix="$ "
            allowNegativeValue={false}
            placeholder="$ 1,00"
            maxLength={10}
            onValueChange={(value) => {
              value ? valor.current = Number(value) : valor.current = null
              isFormValido()
            }}
          />
        </div>

        <div>
          <label htmlFor="taxa">Taxa do Estado</label>
          <CurrencyInput
            id="taxa"
            suffix=" %"
            allowDecimals={false}
            allowNegativeValue={false}
            placeholder="0 %"
            maxLength={3}
            onValueChange={(value) => {
              value ? taxa.current = Number(value) : taxa.current = null
              isFormValido()
            }}
          />
        </div>
      </ValorContainer>

      <TipoCompraContainer>
        <h2>Tipo de compra</h2>

        <div>
          <input type="radio" name="tipoCompra" value="dinheiro" id="dinheiro" required checked={tipoCompra === 'dinheiro'} onChange={(e) => setTipoCompra(e.target.value)} />
          <label htmlFor="dinheiro">Dinheiro</label>
        </div>

        <div>
          <input type="radio" name="tipoCompra" value="cartao" id="cartao" required checked={tipoCompra === 'cartao'} onChange={(e) => setTipoCompra(e.target.value)} />
          <label htmlFor="cartao">Cartão</label>
        </div>
      </TipoCompraContainer>

      <button type="submit" disabled={!formValido}>
        <TransferArrow />
        Converter
      </button>
    </Container>
  )
}