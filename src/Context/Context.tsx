import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

interface CoffeesProviderProps {
  children: ReactNode
}

interface ICoffeeProducts {
  id: number
  name: string
  image: string
  price: string
  qty: number
  indexOrder: string
}

export interface IFormData {
  CEP: string
  Street: string
  Number: number
  Complement?: string | undefined
  District: string
  City: string
  Uf: string
}

interface CoffeesContextProps {
  cartProducts: ICoffeeProducts[]
  addInCart: (coffee: ICoffeeProducts) => void
  removeOfCart: (index: string) => void
  updateCartWithNewInfo: (coffee: ICoffeeProducts) => void
  addFormData: (data: IFormData) => void
  formData: IFormData | undefined
  paymentMethod: string | undefined
  addPaymentMethod: (text: string) => void
}

export const CoffeesContext = createContext({} as CoffeesContextProps)

export function CoffeesProvider({ children }: CoffeesProviderProps ) {

// COFFEES IN GENERAL

  const [cartProducts, setCartProducts] = useState<ICoffeeProducts[]>([])

  function addInCart(coffee: ICoffeeProducts) {
    setCartProducts([...cartProducts, coffee])
  }
  
  function removeOfCart(index: string) {
    const ProductsWithoutDeletedOne = cartProducts.filter(
      (product) => index !== product.indexOrder
    )
    setCartProducts(ProductsWithoutDeletedOne)
  } 
  
  function updateCartWithNewInfo(coffeeUpdate: ICoffeeProducts) {
    const NewOrder = []
    for (let coffee of cartProducts) {
    
      if (coffeeUpdate.indexOrder === coffee.indexOrder) {
        NewOrder.push(coffeeUpdate)
      } else {
        NewOrder.push(coffee)
        
      }
    } setCartProducts(NewOrder)
  }

// FORMS 
  
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState<IFormData>()
  
  function addFormData(data: IFormData) { 
    setFormData(data)
    navigate("/order")
  }

  const [paymentMethod, setPaymentMethod] = useState("")

   function addPaymentMethod(text: string) {
     setPaymentMethod(text)
   }

  
  
  return (
    <CoffeesContext.Provider
      value={{ cartProducts, addInCart, removeOfCart, updateCartWithNewInfo, addFormData, formData, addPaymentMethod, paymentMethod}}>
      {children}
    </CoffeesContext.Provider>
  )
}