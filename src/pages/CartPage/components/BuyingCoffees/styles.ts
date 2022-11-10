import styled from 'styled-components'

export const BuyingCoffesContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

width: 23.125rem;
height: 5rem;

`
export const CoffeeInfos = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1.25rem;
`

export const CoffeePhoto = styled.div`
img{
  height: 4rem;
  width: 4rem;
}
`
export const CoffeeData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  div.CoffeeName{ 
    span{
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme.Base['base-subtitle']};
  }
}
`

export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;

  div.cartNumber {
    background: ${(props) => props.theme.Base['base-button']};
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.35rem 0.5rem;

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
      color: ${(props) => props.theme.Base['base-title']};
    }
  }
  div.Remove {
    & button.TrashIcon {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;
      border-radius: 6px;
      padding: 0.4rem 0.5rem;

      color: ${(props) => props.theme.Produto['purple']};
      background: ${(props) => props.theme.Base['base-button']};
      border: none;
      cursor: pointer;
      transition: all 0.2s;

      & span {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        line-height: 130%;
        color: ${(props) => props.theme.Base['base-text']};
      }
      &:hover {
        background: ${(props) => props.theme.Base['base-hover']};
      }
    }
  }
`

export const Prices = styled.div`
margin-top: -2.5rem;
span{
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  line-height: 130%;
  color: ${(props) => props.theme.Base['base-title']};
}
`
export const DivisionLine = styled.div`
  width: 23.125rem;
  height: 1px;
  background-color: ${(props) => props.theme.Base['base-button']};
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`