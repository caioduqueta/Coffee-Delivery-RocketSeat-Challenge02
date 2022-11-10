import { useContext, useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { CoffeesContext } from "../../../../Context/Context"
import { BuyingCoffes } from "../BuyingCoffees"

import { BuyingCart, CartsDiv, Total, ButtonPedido } from './styles'

export function OrderedProducts() {

  const { cartProducts } = useContext(CoffeesContext)
  const [totalItens, setTotalItens] = useState(0)
  const [entregaTotal] = useState(3.50)
  const [totalFinal, setTotalFinal] = useState(0)

  useEffect(() => { 
    let TotalProducts = 0
    for (let coffee of cartProducts) {
    let TotalProduct = Number(coffee.price.replace(',','.')) * coffee.qty
      TotalProducts += TotalProduct
 }
    setTotalItens(TotalProducts)
    setTotalFinal(TotalProducts + entregaTotal)
  }, [cartProducts])

  return (
    <CartsDiv>
      <h1>Cafés selecionados</h1>
      <BuyingCart>
        {cartProducts.map((product) => (
          <BuyingCoffes key={product.id} {...product} />
        ))}

        <Total>
          <div className="TotalItens">
            <span>Total de Itens</span>
            <span>{`R$ ${totalItens.toFixed(2).replace('.', ',')}`}</span>
          </div>
          <div className="Entrega">
            <span>Entrega</span>
            <span>{`R$ ${entregaTotal.toFixed(2).replace('.', ',')}`}</span>
          </div>
          <div className="Total">
            <span>Total</span>
            <span>{`R$ ${totalFinal.toFixed(2).replace('.', ',')}`}</span>
          </div>
        </Total>
          <ButtonPedido type="submit" form="Hook-Form">
            <span>CONFIRMAR PEDIDO</span>
          </ButtonPedido>
      </BuyingCart>
    </CartsDiv>
  )
}