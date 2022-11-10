import { MapPinLine, CurrencyDollar } from "phosphor-react";
import { PaymentsButton } from "../PaymentsButton";
import { InfoDiv, PersonalInfoDiv, Form, PaymentsInfoDiv, ButtonsDiv } from "./styles";
import InputMask from 'react-input-mask'
import {useForm, SubmitHandler} from "react-hook-form"
import { CoffeesContext, IFormData } from "../../../../Context/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";

export function PersonalInformation() {

   const { addFormData } = useContext(CoffeesContext)

  const { register, handleSubmit } = useForm<IFormData>();
  const onSubmit: SubmitHandler<IFormData> = (data) => {
    addFormData(data)
    Link 
  };

  return (
    <InfoDiv>
      <h1>Complete seu pedido</h1>
      <PersonalInfoDiv>
        <div className="IntroPI">
          <div className="IconPI">
            <MapPinLine size={22} />
          </div>
          <div className="InfoPI">
            <h2>Endereço de Entrega</h2>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </div>
        <Form id="Hook-Form" onSubmit={handleSubmit(onSubmit)}>
          <InputMask
            id="CEP"
            className="CEP"
            mask="99999-999"
            placeholder="CEP"
            required
            {...register('CEP')}

          />
          <input
            id="Street"
            className="Street"
            placeholder="Rua"
            type="text"
            required
            {...register('Street')}
          />
          <div className="House">
            <input
              id="Number"
              className="Number"
              placeholder="Número"
              type="number"
              required
              {...register('Number')}
            />
            <input
              id="Complement"
              className="Complement"
              placeholder="Complemento"
              type="text"
              {...register('Complement')}
            />
          </div>
          <div className="City">
            <input
              id="District"
              className="District"
              placeholder="Bairro"
              type="text"
              required
              {...register('District')}
            />
            <input
              id="City"
              className="City"
              placeholder="Cidade"
              type="text"
              required
              {...register('City')}
            />
            <input
              id="Uf"
              className="Uf"
              placeholder="UF"
              type="text"
              required
              {...register('Uf')}
              maxLength={2}
              minLength={2}
            />
          </div>
        </Form>
      </PersonalInfoDiv>
      <PaymentsInfoDiv>
        <div className="IntroPayI">
          <div className="IconPayI">
            <CurrencyDollar size={22} />
          </div>
          <div className="InfoPayI">
            <h2>Pagamento</h2>
            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
          </div>
        </div>
        <ButtonsDiv>
          <PaymentsButton icon="CreditCard" text="Cartão de Crédito" />
          <PaymentsButton icon="Bank" text="Cartão de Débito" />
          <PaymentsButton icon="Money" text="Dinheiro" />
        </ButtonsDiv>
      </PaymentsInfoDiv>
    </InfoDiv>
  )
}