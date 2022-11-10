import styled from "styled-components";

export const CoffeeTagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span.tag {
    font-family: 'Roboto', sans-serif;
    font-size: 0.625rem;
    font-weight: 700;
    line-height: 130%;

    color: ${(props) => props.theme.Produto['yellow-dark']};

    padding: 0.25rem 0.5rem;
    background: ${(props) => props.theme.Produto['yellow-light']};
    border-radius: 8px;
  }
`