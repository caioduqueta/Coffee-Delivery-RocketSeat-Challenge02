import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './theme/DefaultTheme'

import { Router } from './router'
import { BrowserRouter } from 'react-router-dom'

import { CoffeesProvider } from './Context/Context'
import { GlobalStyle } from './styles/global'


export function App() { 
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeesProvider>
          <Router />
        </CoffeesProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
  
