import { OrderedProducts } from "../OrderedProducts"

import { PersonalInformation } from "../PersonalInformation"
import { CartsContainer, CartsContent} from "./styles"

export function Carts() {
  return (
    <CartsContainer>
      <CartsContent>
        <PersonalInformation />
        <OrderedProducts/>
      </CartsContent>
    </CartsContainer>
  )
}