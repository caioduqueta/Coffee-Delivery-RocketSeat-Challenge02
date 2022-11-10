import styled from "styled-components";

export const PaymentsButtonContainer = styled.div`
  button {
    width: 11.25rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;

    color: ${(props) => props.theme.Produto['purple']};
    background: ${(props) => props.theme.Base['base-button']};
    padding: 1rem;

    border-radius: 6px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all 0.2s;

    span {
      color: ${(props) => props.theme.Base['base-text']};
      font-size: 0.75rem;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      line-height: 160%;
      text-transform: uppercase;
    }

    &:hover {
      background: ${(props) => props.theme.Base['base-hover']};
    }
    &:focus {
      background: ${(props) => props.theme.Produto['purple-light']};
      border: 1px solid ${(props) => props.theme.Produto['purple-dark']};
    }
  }
`