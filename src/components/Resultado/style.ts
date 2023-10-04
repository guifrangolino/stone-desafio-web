import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;

  @media (max-width: 666px) {
    margin-top: 50px;
  }

  button {
    display: flex;
    padding: 16px;
    align-items: flex-start;
    gap: 16px;
    border-radius: 8px;
    border: 1px solid #D7E0EB;
    background: #FFF;
    box-shadow: 0px 8px 4px 0px rgba(13, 17, 27, 0.08);
    cursor: pointer;

    color: #2E3742;
    font-family: 'Sharon Sans', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }
`

export const ResultadoValor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;

  p {
    color: #45505E;
    font-family: 'Sharon Sans', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
  }

  span {
    color: #00AB63;
    font-family: 'Sharon Sans', sans-serif;
    font-size: 64px;
    font-style: normal;
    font-weight: 600;
    line-height: 80px;
  }
`

export const ResultadoInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  p {
    color: #6E7E90;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;

    span {
      font-weight: 400;
    }
  }
`