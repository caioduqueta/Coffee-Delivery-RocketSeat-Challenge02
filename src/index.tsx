import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { createServer } from "miragejs"

import ExpressoTradicional from "./assets/Coffees/ExpressoTradicional.svg"
import ExpressoAmericano from "./assets/Coffees/ExpressoAmericano.svg"
import ExpressoCremoso from "./assets/Coffees/ExpressoCremoso.svg"
import ExpressoGelado from "./assets/Coffees/ExpressoGelado.svg"
import CafécomLeite from "./assets/Coffees/CafécomLeite.svg"
import Latte from "./assets/Coffees/Latte.svg"
import Capuccino from "./assets/Coffees/Capuccino.svg"
import Macchiato from "./assets/Coffees/Macchiato.svg"
import Mocaccino from "./assets/Coffees/Mocaccino.svg"
import ChocolateQuente from "./assets/Coffees/ChocolateQuente.svg"
import Cubano from "./assets/Coffees/Cubano.svg"
import Havaiano from "./assets/Coffees/Havaiano.svg"
import Árabe from "./assets/Coffees/Árabe.svg"
import Irlandês from "./assets/Coffees/Irlandês.svg"

createServer({
  
  routes() {
    this.get('/api/coffees', () => [
      {
        Id: 1,
        Name: 'Expresso Tradicional',
        Image: ExpressoTradicional,
        Description: 'O tradicional café feito com água quente e grãos moídos',
        Tags: ['tradicional'],
        Price: '9,90',
      },
      {
        Id: 2,
        Name: 'Expresso Americano',
        Image: ExpressoAmericano,
        Description: 'Expresso diluído, menos intenso que o tradicional',
        Tags: ['tradicional'],
        Price: '9,90',
      },
      {
        Id: 3,
        Name: 'Expresso Cremoso',
        Image: ExpressoCremoso,
        Description: 'Café expresso tradicional com espuma cremosa',
        Tags: ['tradicional'],
        Price: '9,90',
      },
      {
        Id: 4,
        Name: 'Expresso Gelado',
        Image: ExpressoGelado,
        Description: 'Bebida preparada com café expresso e cubos de gelo',
        Tags: ['tradicional', 'gelado'],
        Price: '9,90',
      },
      {
        Id: 5,
        Name: 'Café com Leite',
        Image: CafécomLeite,
        Description: 'Meio a meio de expresso tradicional com leite vaporizado',
        Tags: ['tradicional', 'com leite'],
        Price: '9,90',
      },
      {
        Id: 6,
        Name: 'Latte',
        Image: Latte,
        Description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        Tags: ['tradicional', 'com leite'],
        Price: '9,90',
      },
      {
        Id: 7,
        Name: 'Capuccino',
        Image: Capuccino,
        Description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        Tags: ['tradicional', 'com leite'],
        Price: '9,90',
      },
      {
        Id: 8,
        Name: 'Macchiato',
        Image: Macchiato,
        Description: 'Café expresso misturado com um pouco de leite quente e espuma',
        Tags: ['tradicional', 'com leite'],
        Price: '9,90',
      },
      {
        Id: 9,
        Name: 'Mocaccino',
        Image: Mocaccino,
        Description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        Tags: ['tradicional', 'com leite'],
        Price: '9,90',
      },
      {
        Id: 10,
        Name: 'Chocolate Quente',
        Image: ChocolateQuente,
        Description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        Tags: ['especial', 'com leite'],
        Price: '9,90',
      },
      {
        Id: 11,
        Name: 'Cubano',
        Image: Cubano,
        Description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        Tags: ['especial', 'alcoólico', 'gelado'],
        Price: '9,90',
      },
      {
        Id: 12,
        Name: 'Havaiano',
        Image: Havaiano,
        Description: 'Bebida adocicada preparada com café e leite de coco',
        Tags: ['especial'],
        Price: '9,90',
      },
      {
        Id: 13,
        Name: 'Árabe',
        Image: Árabe,
        Description: 'Bebida preparada com grãos de café árabe e especiarias',
        Tags: ['especial'],
        Price: '9,90',
      },
      {
        Id: 14,
        Name: 'Irlandês',
        Image: Irlandês,
        Description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        Tags: ['especial', 'alcoólico'],
        Price: '9,90',
      },
    ])
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

    <App />

)
