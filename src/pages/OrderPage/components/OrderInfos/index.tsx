import { CurrencyDollar, MapPin, Timer } from "phosphor-react"
import { OrderInfosContainer, OrderInfosContent, OrderInfosBox, OrderInfosMain, OrderInfosImage } from "./styles"
import Illustration from "../../../../assets/Illustration.svg"
import { CoffeesContext, IFormData } from '../../../../Context/Context'
import { useContext} from "react"


export function OrderInfos() {

  const { formData, paymentMethod } = useContext(CoffeesContext)

  return (
    <OrderInfosContainer>
      <OrderInfosContent>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <OrderInfosMain>
          <OrderInfosBox>
            <div className="address">
              <div className="iconAddress">
                <MapPin size={20} weight="fill" />
              </div>
              <div className="textAddress">
                <p>
                  Entrega em <strong>{`${formData?.Street}, ${formData?.Number}`}</strong>
                </p>
                <p>{`${formData?.District}, ${formData?.City}`}</p>
              </div>
            </div>
            <div className="delivery">
              <div className="iconDelivery">
                <Timer size={20} weight="fill" />
              </div>
              <div className="textDelivery">
                <p>Previsão de Entrega</p>
                <p>
                  <strong>20min - 30 min</strong>
                </p>
              </div>
            </div>
            <div className="payment">
              <div className="iconPayment">
                <CurrencyDollar size={20} weight="fill" />
              </div>
              <div className="textPayment">
                <p>Pagamento na Entrega</p>
                <p>
                  <strong>{paymentMethod}</strong>
                </p>
              </div>
            </div>
          </OrderInfosBox>
          <OrderInfosImage>
            <img src={Illustration}></img>
          </OrderInfosImage>
        </OrderInfosMain>
      </OrderInfosContent>
    </OrderInfosContainer>
  )
}

