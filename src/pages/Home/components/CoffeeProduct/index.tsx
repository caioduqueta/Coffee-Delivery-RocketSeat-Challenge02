import { CoffeeTag } from "../CoffeeTag"
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { CoffeeProductContainer, PricesAndCart, ButtonsDiv, Tagsdiv } from "./styles"
import { CoffeesContext } from "../../../../Context/Context";
import { useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

 interface CoffeeProductProps {
  id: number
  name: string;
  image: string;
  description: string;
  tags: string[];
  price: string;
  indexOrder?: string | undefined
}

export function CoffeeProduct({id, name, description, image, tags, price }: CoffeeProductProps) {
  
  const { addInCart } = useContext(CoffeesContext)

  const [quantityInCart, setQuantityInCart] = useState(1)

   function handleOneMoreCoffeesInCart() {
     setQuantityInCart(quantityInCart + 1 )
   }
  
  function handleOneLessCoffeesInCart() {
     if (quantityInCart > 1) 
    setQuantityInCart(quantityInCart - 1)
   }

  function handleAddInCart() {
    const NewCart = { id, name, image, price, qty: quantityInCart, indexOrder : uuidv4() }
    addInCart(NewCart)
  }

  return (
    <CoffeeProductContainer>
      <img src={image} />
      <Tagsdiv>
        {tags.map((tag, index) => (
          <CoffeeTag key={index} tag={tag} />
        ))}
      </Tagsdiv>
      <h2>{name}</h2>
      <p>{description}</p>
      <PricesAndCart>
        <div>
          <span className="real">R$ </span>
          <span className="prices">{price}</span>
        </div>
        <ButtonsDiv>
          <div className="cartNumber">
            <button className="minus" type="button" onClick={handleOneLessCoffeesInCart}>
              <Minus size={14} weight="bold" />
            </button>
            <span>{quantityInCart}</span>
            <button className="plus" type="button" onClick={handleOneMoreCoffeesInCart}>
              <Plus size={14} weight="bold" />
            </button>
          </div>
          <div className="cart">
            <button className="cart" type="button" onClick={handleAddInCart}>
              <ShoppingCartSimple size={22} weight="fill" />
            </button>
          </div>
        </ButtonsDiv>
      </PricesAndCart>
    </CoffeeProductContainer>
  )
}