import { ButtonsDiv, BuyingCoffesContainer, CoffeeData, CoffeeInfos, CoffeePhoto, DivisionLine, Prices } from "./styles";
import { Minus, Plus, Trash } from "phosphor-react";
import { CoffeesContext } from "../../../../Context/Context";
import { useContext, useState, useEffect } from "react";

interface BuyingCoffesProps {
  id: number
  name: string
  image: string
  price: string
  qty: number
  indexOrder: string
}

export function BuyingCoffes({ id, name, image, price, qty, indexOrder }: BuyingCoffesProps) { 
  
  const { removeOfCart, updateCartWithNewInfo } = useContext(CoffeesContext)

  const [quantityInCart, setQuantityInCart] = useState(qty)
  const [newPrice, setNewPrice] = useState(Number(price.replace(",", ".")))
  
  function handleDeleteProduct(index: string) {
    removeOfCart(index)
  }

  function handleOneMoreCoffeesInCart() {
    setQuantityInCart(quantityInCart + 1)
  }

  function handleOneLessCoffeesInCart() {
    if (quantityInCart > 1) setQuantityInCart(quantityInCart - 1)
  }

  function newPriceProduct() {
    const NewCoffeePrice = quantityInCart * Number(price.replace(',', '.'))
    setNewPrice(NewCoffeePrice)
  }
  
  useEffect(() => {
    newPriceProduct()
    updateCartWithNewInfo( {
      id,
      name,
      image,
      price,
      qty: quantityInCart,
      indexOrder
    }  )
  }, [quantityInCart])
  

  return (
    <>
      <BuyingCoffesContainer>
        <CoffeeInfos>
          <CoffeePhoto>
            <img src={image} />
          </CoffeePhoto>
          <CoffeeData>
            <div className="CoffeeName">
              <span>{name}</span>
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
              <div className="Remove">
                <button
                  className="TrashIcon"
                  type="button"
                  onClick={() => handleDeleteProduct(indexOrder)}
                >
                  <Trash size={14} />
                  <span>Remover</span>
                </button>
              </div>
            </ButtonsDiv>
          </CoffeeData>
        </CoffeeInfos>
        <Prices>
          <span>{`R$ ${newPrice.toFixed(2).replace(".",",")}`}</span>
        </Prices>
      </BuyingCoffesContainer>
      <DivisionLine>
        <span></span>
      </DivisionLine>
    </>
  )
}