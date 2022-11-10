import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 70rem;
  padding: 2rem 1rem;

  a{
    cursor: pointer;
  }

  div.icon{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }
`


export const PlacePin = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 14;
  font-weight: 400;

  padding: 0.5rem;
  background-color: ${(props) => props.theme.Produto['purple-light']};
  border-radius: 6px;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  color: ${(props) => props.theme.Produto['purple']};
`


export const ShoppingCartButton = styled.button`
  padding: 0.5rem;
  background-color: ${(props) => props.theme.Produto['yellow-light']};
  border-radius: 6px;
  border: none;
  cursor: pointer;

  color: ${(props) => props.theme.Produto['yellow-dark']};
  position: relative;

  span {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    padding-top: 0.15rem;
    padding-right: -0.15rem;

    width: 1.25rem;
    height: 1.25rem;
    background-color: ${(props) => props.theme.Produto['yellow-dark']};
    color: ${(props) => props.theme.Base['white']};
    border-radius: 50%;

    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 130%;
    text-align: center;
  }
`

