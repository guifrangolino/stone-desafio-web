import styled from "styled-components";

export const Container = styled.form`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
  gap: 32px;

  @media (max-width: 666px) {
    margin-top: 50px;
  }

  button {
    display: flex;
    padding: 16px;
    gap: 16px;
    border-radius: 8px;
    border: 1px solid ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    font-family: 'Sharon Sans', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    cursor: pointer;

    &:disabled {
      background: ${props => props.theme.colors.mediumGray2};
    }

    svg {
      width: 16px;
      height: 16px;
      margin: auto;
    }
  }
`

export const ValorContainer = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 666px) {
    flex-direction: column;
  }
  
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  input {
    width: 168px;
    height: 56px;
    border: 1px solid rgba(13, 17, 27, 0.08);
    border-radius: 4px;
    padding: 16px;
    color: ${props => props.theme.colors.darkGray};
    font-family: 'Sharon Sans', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    box-shadow: 0px 8px 4px 0px rgba(13, 17, 27, 0.08);
    outline-color: ${props => props.theme.colors.primary};

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  input[type="number"] {
    appearance: textfield;
    -moz-appearance: textfield;
  }

  label {
    color: ${props => props.theme.colors.darkGray};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`

export const TipoCompraContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  h2 {
    color: ${props => props.theme.colors.darkGray};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    flex-basis: 100%;
  }

  div {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    
    label {
      color: ${props => props.theme.colors.darkGray};
      font-size: 16px;
      font-style: normal;
      font-weight: 450;
      letter-spacing: 0.5px;
      line-height: 24px;
      cursor: pointer;
    }

    input[type="radio"] {
      appearance: none;
      background-color: ${props => props.theme.colors.white};
      margin: 0;
      font: inherit;
      color: ${props => props.theme.colors.primary};
      width: 24px;
      height: 24px;
      border: 0.15em solid currentColor;
      border-radius: 50%;
      transform: translateY(-0.075em);
      display: grid;
      place-content: center;
      cursor: pointer;

      &::before {
        content: "";
        width: 14px;
        height: 14px;
        border-radius: 50%;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em ${props => props.theme.colors.primary};
      }

      &:checked::before {
        transform: scale(1);
      }
    }
  }
`