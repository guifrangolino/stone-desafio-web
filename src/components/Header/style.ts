import { styled } from 'styled-components'

export const Container = styled.header`
  display: flex;
  gap: 48px;

  @media (max-width: 666px) {
    flex-direction: column;
    gap: 24px;

    img {
      width: 120px;
    }
  }
`

export const APIInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 666px) {
    gap: 4px;
  }

  div {
    display: flex;
    gap: 20px;
    
    p {
      color: ${props => props.theme.colors.darkGray2};
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;

      @media (max-width: 666px) {
        font-size: 16px;
      }
    }
  }

  span {
    color: ${props => props.theme.colors.mediumGray2};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media (max-width: 666px) {
      font-size: 12px;
    }
  }
`
