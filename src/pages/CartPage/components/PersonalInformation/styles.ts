import styled from "styled-components";

export const InfoDiv = styled.div`
  h1 {
    margin-bottom: 1rem;
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme.Base['base-subtitle']};
  }
`
export const PersonalInfoDiv = styled.div`
  width: 40rem;
  height: 23.25rem;

  background-color: ${(props) => props.theme.Base['base-card']};
  border-radius: 6px;
  margin-bottom: 0.75rem;

  div.IntroPI {
    padding: 2.5rem 2.5rem 2rem 2.5rem;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    div.IconPI {
      margin-right: 0.5rem;
      color: ${(props) => props.theme.Produto['yellow-dark']};
    }
    div.InfoPI {
      h2 {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        line-height: 130%;
        color: ${(props) => props.theme.Base['base-subtitle']};

        padding-bottom: 0.125rem;
      }

      p {
        font-family: 'Roboto', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 130%;
        color: ${(props) => props.theme.Base['base-text']};
      }
    }
  }
`

export const Form = styled.form`
  padding: 0 2.5rem 2.5rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  input.CEP {
    width: 12.5rem;
    padding: 0.75rem;
    margin-bottom: 1rem;

    background: ${(props) => props.theme.Base['base-input']};
    color: ${(props) => props.theme.Base['base-text']};

    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;

    border: 1px solid ${(props) => props.theme.Base['base-button']};
    border-radius: 4px;
    outline: none;

    transition: all 0.2s;

    &:focus {
      border: 1px solid ${(props) => props.theme.Produto['yellow-dark']};
    }

    &:placeholder {
      color: ${(props) => props.theme.Base['base-label']};
    }
  }

  input.Street {
    width: 35rem;
    padding: 0.75rem;
    margin-bottom: 1rem;

    background: ${(props) => props.theme.Base['base-input']};
    color: ${(props) => props.theme.Base['base-text']};

    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;

    border: 1px solid ${(props) => props.theme.Base['base-button']};
    border-radius: 4px;
    outline: none;
    transition: all 0.2s;

    &:focus {
      border: 1px solid ${(props) => props.theme.Produto['yellow-dark']};
    }

    &:placeholder {
      color: ${(props) => props.theme.Base['base-label']};
    }
  }
  div.House {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 0.75rem;

    input.Number {
      width: 12.5rem;
      padding: 0.75rem;
      margin-bottom: 1rem;

      background: ${(props) => props.theme.Base['base-input']};
      color: ${(props) => props.theme.Base['base-text']};

      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 130%;

      border: 1px solid ${(props) => props.theme.Base['base-button']};
      border-radius: 4px;
      outline: none;
      transition: all 0.2s;

      &:focus {
        border: 1px solid ${(props) => props.theme.Produto['yellow-dark']};
      }

      &:placeholder {
        color: ${(props) => props.theme.Base['base-label']};
      }
    }
    input.Complement {
      width: 21.75rem;
      padding: 0.75rem;
      margin-bottom: 1rem;

      background: ${(props) => props.theme.Base['base-input']};
      color: ${(props) => props.theme.Base['base-text']};

      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 130%;

      border: 1px solid ${(props) => props.theme.Base['base-button']};
      border-radius: 4px;
      outline: none;
      transition: all 0.2s;

      &:focus {
        border: 1px solid ${(props) => props.theme.Produto['yellow-dark']};
      }

      &:placeholder {
        color: ${(props) => props.theme.Base['base-label']};
      }
    }
  }
  div.City {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 0.75rem;

    input.District {
      width: 12.5rem;
      padding: 0.75rem;
      margin-bottom: 1rem;

      background: ${(props) => props.theme.Base['base-input']};
      color: ${(props) => props.theme.Base['base-text']};

      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 130%;

      border: 1px solid ${(props) => props.theme.Base['base-button']};
      border-radius: 4px;
      outline: none;
      transition: all 0.2s;

      &:focus {
        border: 1px solid ${(props) => props.theme.Produto['yellow-dark']};
      }

      &:placeholder {
        color: ${(props) => props.theme.Base['base-label']};
      }
    }
    input.City {
      width: 17.25rem;
      padding: 0.75rem;
      margin-bottom: 1rem;

      background: ${(props) => props.theme.Base['base-input']};
      color: ${(props) => props.theme.Base['base-text']};

      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 130%;

      border: 1px solid ${(props) => props.theme.Base['base-button']};
      border-radius: 4px;
      outline: none;
      transition: all 0.2s;

      &:focus {
        border: 1px solid ${(props) => props.theme.Produto['yellow-dark']};
      }

      &:placeholder {
        color: ${(props) => props.theme.Base['base-label']};
      }
    }
    input.Uf {
      width: 3.75rem;
      padding: 0.75rem;
      margin-bottom: 1rem;

      background: ${(props) => props.theme.Base['base-input']};
      color: ${(props) => props.theme.Base['base-text']};

      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 130%;

      border: 1px solid ${(props) => props.theme.Base['base-button']};
      border-radius: 4px;
      outline: none;
      transition: all 0.2s;

      &:focus {
        border: 1px solid ${(props) => props.theme.Produto['yellow-dark']};
      }

      &:placeholder {
        color: ${(props) => props.theme.Base['base-label']};
      }
    }
  }
`

export const PaymentsInfoDiv = styled.div`
  width: 40rem;
  height: 13rem;

  background-color: ${(props) => props.theme.Base['base-card']};
  border-radius: 6px;

  div.IntroPayI {
    padding: 2.5rem 2.5rem 2rem 2.5rem;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    div.IconPayI {
      margin-right: 0.5rem;
      color: ${(props) => props.theme.Produto['purple']};
    }
    div.InfoPayI {
      h2 {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        line-height: 130%;
        color: ${(props) => props.theme.Base['base-subtitle']};

        padding-bottom: 0.125rem;
      }

      p {
        font-family: 'Roboto', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 130%;
        color: ${(props) => props.theme.Base['base-text']};
      }
    }
  }
`
export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  padding: 0 2.5rem 2rem 2.5rem;
`
