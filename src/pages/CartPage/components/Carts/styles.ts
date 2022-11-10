import styled from "styled-components";

export const CartsContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 margin-top: 2.5rem;
`

export const CartsContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 70rem;
  gap: 2rem;

  @media (max-width: 1080px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }

`

