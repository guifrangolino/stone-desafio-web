import { styled } from 'styled-components'

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 240px;
  top: 48vh;
  right: 450px;
  right: 34vw;

  @media (max-width: 958px) {
    display: none;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
