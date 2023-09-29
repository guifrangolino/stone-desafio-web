import { Container } from "./style";

export function Elipse() {
  return (
    <Container>
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="18" fill="#00AB63" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="104" height="104" viewBox="0 0 104 104" fill="none">
        <circle opacity="0.2" cx="52" cy="52" r="50" stroke="#008B57" stroke-width="4" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="213" height="213" viewBox="0 0 213 213" fill="none">
        <circle opacity="0.7" cx="106.5" cy="106.5" r="104.5" stroke="#008B57" stroke-width="4" />
      </svg>
      <svg width="310" height="310" viewBox="0 0 310 310" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.2" cx="155" cy="155" r="153" stroke="#008B57" stroke-width="4" />
      </svg>
    </Container>
  )
}