import { styled } from 'styled-components'

export const Container = styled.header`
  padding: 32px;
  display: flex;
  gap: 48px;
`

export const APIInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    display: flex;
    gap: 20px;

    p {
      color: #45505E;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }

  span {
    color: #8C9CAD;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`
