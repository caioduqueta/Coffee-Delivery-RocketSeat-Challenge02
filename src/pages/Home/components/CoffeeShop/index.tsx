import { useEffect, useState } from "react"
import { CoffeeProduct } from "../CoffeeProduct"
import { CoffeeContainer, CoffeeTitle, CoffeeContent } from "./styles"

interface CoffeesType {
  Id: number
  Name: string
  Image: string
  Description: string
  Tags: string[]
  Price: string
}

export function CoffeeShop() {
  
    const [coffees, setCoffees] = useState<CoffeesType[]>([])

    useEffect(() => {
      fetch('http://127.0.0.1:5173/api/coffees')
        .then((response) => response.json())
        .then((data) => setCoffees(data))
    }, [])
  
 
  return (
    <CoffeeContainer>
      <CoffeeTitle>
        <h1>Nossos Cafés</h1>
      </CoffeeTitle>
      <CoffeeContent>
        {coffees.map(coffee =>
        (
          <CoffeeProduct
            key={coffee.Id}
            id={coffee.Id}
            name={coffee.Name}
            image={coffee.Image}
            description={coffee.Description}
            tags={coffee.Tags}
            price={coffee.Price}
          />)
         )}
      </CoffeeContent>
    </CoffeeContainer>
  )
}