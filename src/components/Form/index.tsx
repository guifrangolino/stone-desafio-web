import { TransferArrow } from "../icons/TransferArrow";
import { Container, TipoCompraContainer, ValorContainer } from "./style";
import { FormEvent } from "react"


export function Form() {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function handleNumChange(event: FormEvent<HTMLInputElement>) {
    // console.log(event);
  }

  return (
    <Container>

      <ValorContainer>
        <div>
          <label htmlFor="dolar">Dólar</label>
          <input type="number" id="dolar" maxLength={13} onChange={handleNumChange} />
        </div>

        <div>
          <label htmlFor="taxa">Taxa do Estado</label>
          <input type="number" id="taxa" maxLength={13} onChange={handleNumChange} />
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

      <button type="submit">
        <TransferArrow />
        Converter
      </button>
    </Container>
  )
}