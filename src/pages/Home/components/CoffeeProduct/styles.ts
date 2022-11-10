import styled from "styled-components";

export const CoffeeProductContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  background: ${(props) => props.theme.Base['base-card']};
  border-radius: 6px 36px;
  margin-bottom: 2.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-top: -1rem;
    margin-bottom: 0.75rem;
  }

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme.Base['base-subtitle']};

    width: 13.5rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    text-align: center;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme.Base['base-label']};
    text-align: center;

    width: 13.5rem;
    margin-bottom: 2rem;
  }
`
export const Tagsdiv = styled.div`
display: flex;
gap: 0.125rem;
`

export const PricesAndCart = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;

  span.real {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme.Base['base-text']};
  }
  span.prices {
    font-family: 'Baloo2', sans-serif;
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 130%;
    color: ${(props) => props.theme.Base['base-text']};
  }

  div.cartNumber {
    padding: 0.75rem 0.5rem;
    background: ${(props) => props.theme.Base['base-button']};
    border-radius: 6px;

    & button.minus,
    .plus {
      color: ${(props) => props.theme.Produto['purple']};
      background: ${(props) => props.theme.Base['base-button']};
      border: none;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        color: ${(props) => props.theme.Produto['purple-dark']};
      }
    }
    & span {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;
      padding: 0 0.35rem;
    }
  }

  div.cart {
    & button.cart {
      color: ${(props) => props.theme.Base['base-card']};
      background: ${(props) => props.theme.Produto['purple-dark']};
      border: none;
      padding: 0.625rem;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        background: ${(props) => props.theme.Produto['purple']};
      }
    }
  }
`

export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`