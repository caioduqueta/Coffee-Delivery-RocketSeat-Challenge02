import { InfoImage, InfoIntroContainer, InfoIntroContent, InfoFeatures1, InfoFeatures2} from "./styles"
import {ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import infoImage from "../../../../assets/IntroImage.svg"


export function InfoIntro() {
  return (
    <InfoIntroContainer>
      <InfoIntroContent>
        <div className="info">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p> Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          <InfoFeatures1>
            <div className="Feature1">
              <div className="icon1">
                <ShoppingCart weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </div>
            <div className="Feature2">
              <div className="icon2">
                <Package weight="fill" />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </div>
          </InfoFeatures1>
          <InfoFeatures2>
            <div className="Feature3">
              <div className="icon3">
                <Timer weight="fill" />
              </div>
              <span>Entrega rápida e rastreada</span>
            </div>
            <div className="Feature4">
              <div className="icon4">
                <Coffee weight="fill" />
              </div>
              <span>O café chega fresquinho até você</span>
            </div>
          </InfoFeatures2>
        </div>
        <InfoImage>
          <img src={infoImage}></img>
        </InfoImage>
      </InfoIntroContent>
    </InfoIntroContainer>
  )
}