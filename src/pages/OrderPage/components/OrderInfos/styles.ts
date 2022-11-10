import styled from "styled-components";

export const OrderInfosContainer = styled.div`
margin-top: 5rem;

display: flex;
justify-content: center;
align-items: center;

`

export const OrderInfosContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 70rem;
  width: 100%;

  @media (max-width: 1080px) {
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme.Produto['yellow-dark']};
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme.Base['base-subtitle']};
  }
`

export const OrderInfosMain = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6.375rem;

  @media (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const OrderInfosBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;

  margin-top: 2.5rem;
  padding: 2.5rem;

  background: linear-gradient(
        ${(props) => props.theme.Base['background']},
        ${(props) => props.theme.Base['background']}
      )
      padding-box,
    linear-gradient(
        135deg,
        ${(props) => props.theme.Produto['yellow']},
        ${(props) => props.theme.Produto['purple']}
      )
      border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;

  div.address {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;

    & div.iconAddress {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 2rem;
      height: 2rem;

      color: ${(props) => props.theme.Base['white']};
      background-color: ${(props) => props.theme.Produto['purple']};
      border-radius: 50%;
    }

    & div.textAddress {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;
      color: ${(props) => props.theme.Base['base-text']};
    }
  }
  div.delivery {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;

    & div.iconDelivery {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 2rem;
      height: 2rem;

      color: ${(props) => props.theme.Base['white']};
      background-color: ${(props) => props.theme.Produto['yellow']};
      border-radius: 50%;
    }

    & div.textDelivery {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;
      color: ${(props) => props.theme.Base['base-text']};
    }
  }
  div.payment {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;

    & div.iconPayment {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 2rem;
      height: 2rem;

      color: ${(props) => props.theme.Base['white']};
      background-color: ${(props) => props.theme.Produto['yellow-dark']};
      border-radius: 50%;
    }

    & div.textPayment {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;
      color: ${(props) => props.theme.Base['base-text']};
    }
  }
`


export const OrderInfosImage = styled.div`

`