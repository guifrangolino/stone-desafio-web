import styled from "styled-components";

export const Container = styled.form`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
  gap: 32px;

  button {
    display: flex;
    padding: 16px;
    gap: 16px;
    border-radius: 8px;
    border: 1px solid #008B57;
    background: #8C9CAD;
    color: #fff;
    font-family: 'Sharon Sans', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    cursor: pointer;

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
    color: #2E3742;
    font-family: 'Sharon Sans', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    box-shadow: 0px 8px 4px 0px rgba(13, 17, 27, 0.08);

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
    color: #2E3742;
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
    color: #2E3742;
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
      color: #2E3742;
      font-family: 'Circular Std', sans-serif;
      font-size: 16px;
      font-style: normal;
      line-height: 24px;
      cursor: pointer;
    }

    input[type="radio"] {
      appearance: none;
      background-color: #fff;
      margin: 0;
      font: inherit;
      color: #008B57;
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
        box-shadow: inset 1em 1em #008B57;
      }

      &:checked::before {
        transform: scale(1);
      }
    }
  }
`