import { HeaderContainer, HeaderContent, PlacePin, ShoppingCartButton } from "./styles"
import logoImg  from "../../assets/LogoCoffee.svg"
import { MapPin, ShoppingCart } from "phosphor-react"
import { CoffeesContext } from '../../Context/Context'
import { useContext} from 'react'
import {NavLink} from "react-router-dom"

export function Header() {

  const { cartProducts } = useContext(CoffeesContext)

  function numberOfProductsInCart() {
    if (cartProducts.length !== 0)
      return <span>{cartProducts.length}</span>
  }


  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/home" title="Home">
          <img src={logoImg} />
        </NavLink>

        <div className="icon">
          <PlacePin>
            <MapPin size={22} weight="fill" />
            <span>São Paulo, SP</span>
          </PlacePin>

          <NavLink to="/cart" title="cart">
            <ShoppingCartButton>
              <ShoppingCart size={20} weight="fill" />
              {numberOfProductsInCart()}
            </ShoppingCartButton>
          </NavLink>
        </div>
      </HeaderContent>
    </HeaderContainer>
  )
}