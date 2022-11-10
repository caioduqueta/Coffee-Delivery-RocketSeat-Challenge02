import styled from "styled-components";
import BackgroudImg from '../../../../assets/Background.svg'

export const InfoIntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-image: url(${BackgroudImg});

  height: 35rem;

`
export const InfoIntroContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 70rem;
  width: 100%;
  padding: 2rem;

  @media (max-width: 1080px) {
    max-width: 67.5rem;
  }

  @media (max-width: 720px) {
    justify-content: center;
    align-items: center;
  }

  div.info {
    @media (max-width: 720px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 1rem;
      padding: 2rem;
    }
    h1 {
      flex: none;
      order: 0;
      align-self: stretch;

      line-height: 130%;
      font-size: 3rem;
      font-family: 'Baloo 2';
      font-weight: 800;
      color: ${(props) => props.theme.Base['base-title']};
      padding-bottom: 1rem;

      @media (max-width: 720px) {
        font-size: 2.5rem;
        text-align: center;
        
      }
    }
    p {
      line-height: 130%;
      font-size: 1.25rem;
      font-family: 'Roboto';
      font-weight: 400;
      color: ${(props) => props.theme.Base['base-subtitle']};
      padding-bottom: 4.125rem;
      word-break: break-all;

      @media (max-width: 1080px) {
        padding-bottom: 1rem;
        max-width: 27.5rem;
        text-align: center;
      }
    }
  }
`
export const InfoFeatures1 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2.5rem;
  margin-bottom: 1.25rem;
  max-width: 35.4rem;

  @media (max-width: 1080px) {
    gap: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 1rem;
  }

  @media (max-width: 720px) {
    gap: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
  }

  div.Feature1 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;
    width: 14.5rem;

    div.icon1 {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 1.75rem;
      height: 1.75rem;

      border-radius: 50%;
      background: ${(props) => props.theme.Produto['yellow-dark']};
      color: ${(props) => props.theme.Base.white};
    }
    span {
      line-height: 130%;
      font-size: 1rem;
      font-family: 'Roboto';
      font-weight: 400;
      color: ${(props) => props.theme.Base['base-text']};
    }
  }

  div.Feature2 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;

    div.icon2 {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 1.75rem;
      height: 1.75rem;

      border-radius: 50%;
      background: ${(props) => props.theme.Base['base-text']};
      color: ${(props) => props.theme.Base.white};
    }
    span {
      line-height: 130%;
      font-size: 1rem;
      font-family: 'Roboto';
      font-weight: 400;
      color: ${(props) => props.theme.Base['base-text']};
    }
  }
`
export const InfoFeatures2 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2.5rem;
  width: 35.4rem;

  @media (max-width: 1080px) {
    gap: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 1rem;
  }
  @media (max-width: 720px) {
    gap: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
  }

  div.Feature3 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;
    width: 14.5rem;

    div.icon3 {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 1.75rem;
      height: 1.75rem;

      border-radius: 50%;
      background: ${(props) => props.theme.Produto['yellow']};
      color: ${(props) => props.theme.Base.white};
    }
    span {
      line-height: 130%;
      font-size: 1rem;
      font-family: 'Roboto';
      font-weight: 400;
      color: ${(props) => props.theme.Base['base-text']};
    }
  }

  div.Feature4 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;

    div.icon4 {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 1.75rem;
      height: 1.75rem;

      border-radius: 50%;
      background: ${(props) => props.theme.Produto['purple']};
      color: ${(props) => props.theme.Base.white};
    }
    span {
      line-height: 130%;
      font-size: 1rem;
      font-family: 'Roboto';
      font-weight: 400;
      color: ${(props) => props.theme.Base['base-text']};
    }
  }
`

export const InfoImage = styled.div`
  height: 10rem;
  width: 29.75rem;
  margin-left: 3.5rem;
  @media (max-width: 1080px) {
    margin-left: 0;
  }
  @media (max-width: 720px) {
    display: none;
    margin-left: 0;
  }
`