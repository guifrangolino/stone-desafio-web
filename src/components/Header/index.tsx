import logo from '../../assets/Main Logo.png'
import { APIInfoContainer, Container } from './style'

export function Header() {
  const date = new Date();

  function mesEmPortugues(mes: number) {
    if (mes <= 0 || mes > 13) return null

    if (mes === 1) return 'janeiro'
    if (mes === 2) return 'fevereiro'
    if (mes === 3) return 'março'
    if (mes === 4) return 'abril'
    if (mes === 5) return 'maio'
    if (mes === 6) return 'junho'
    if (mes === 7) return 'julho'
    if (mes === 8) return 'agosto'
    if (mes === 9) return 'setembro'
    if (mes === 10) return 'outubro'
    if (mes === 11) return 'novembro'
    if (mes === 12) return 'dezembro'
  }

  return (
    <Container>
      <img src={logo} alt="Site Logo" />
      <APIInfoContainer>
        <div>
          <p>{date.getUTCDate()} de {mesEmPortugues(date.getUTCMonth() + 1)} {date.getUTCFullYear()}</p>
          <p>|</p>
          <p>{("0" + date.getUTCHours()).slice(-2)}:{("0" + date.getUTCMinutes()).slice(-2)} UTC</p>
        </div>
        <span>Dados de câmbio disponibilizados pela Morningstar.</span>
      </APIInfoContainer>
    </Container>
  )
}