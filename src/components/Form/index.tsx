import { TransferArrow } from "../icons/TransferArrow";
import { Container, TipoCompraContainer, ValorContainer } from "./style";
import { FormEvent, useRef, useState } from "react"
import CurrencyInput from 'react-currency-input-field';


export function Form() {
  const valor = useRef<number | null>(null)
  const taxa = useRef<number | null>(null)
  const [formValido, setFormValido] = useState(false)

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (valor.current === null || taxa.current === null) return
  }

  function isFormValido() {
    valor.current && taxa.current ? setFormValido(true) : setFormValido(false)
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
          <input type="radio" name="tipoCompra" value="Dinheiro" id="dinheiro" required defaultChecked />
          <label htmlFor="dinheiro">Dinheiro</label>
        </div>

        <div>
          <input type="radio" name="tipoCompra" value="Cartão" id="cartao" required />
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