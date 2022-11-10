import { CreditCard, Bank, Money } from "phosphor-react";
import { useContext, useState } from "react";
import { CoffeesContext } from "../../../../Context/Context";
import { PaymentsButtonContainer } from "./styles";

interface PaymentsButtonProps{
  icon: string;
  text: string;
}

export function PaymentsButton({ icon, text }: PaymentsButtonProps) {

  const { addPaymentMethod } = useContext(CoffeesContext)
  
  function handleAddPaymentMethod() {
    addPaymentMethod(text)
  }


  function Icons(icon: string) {
    switch (icon) {
      case 'CreditCard': {
        return (<CreditCard size={16} />)
      }
      case 'Bank': {
        return (<Bank size={16} />)
      }
      case 'Money': {
        return (<Money size={16} />)
      }
    }
  }

  return (
    <PaymentsButtonContainer>
      <button onClick={handleAddPaymentMethod}>
        {Icons(icon)}
          <span>{text}</span>
      </button>
    </PaymentsButtonContainer>
  )
}



 
