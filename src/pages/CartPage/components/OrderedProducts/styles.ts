import styled from 'styled-components'

export const CartsDiv = styled.div`
  h1 {
    margin-bottom: 1rem;
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme.Base['base-subtitle']};
  }
`
export const BuyingCart = styled.div`
  width: 28rem;
  height: auto;
  border-radius: 6px 44px;
  padding: 2.5rem 2.5rem 1.5rem 2.5rem;
  background: ${(props) => props.theme.Base['base-card']};
`

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div.TotalItens {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    span {
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 130%;
      color: ${(props) => props.theme.Base['base-text']};
    }
  }

  div.Entrega {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    span {
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 130%;
      color: ${(props) => props.theme.Base['base-text']};
    }
  }

  div.Total {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    span {
      font-family: 'Roboto', sans-serif;
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 130%;
      color: ${(props) => props.theme.Base['base-subtitle']};
    }
  }
`

export const ButtonPedido = styled.button`
  width: 100%;
  height: 2.875rem;
  margin-top: 1.5rem;
  background-color: ${(props) => props.theme.Produto['yellow']};
  border: none;
  border-radius: 6px;
  transition: all 0.2s;

  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 160%;
    padding: 0.75rem;
    color: white;
  }

  &:hover {
    background-color: ${(props) => props.theme.Produto['yellow-dark']};
  }
`
