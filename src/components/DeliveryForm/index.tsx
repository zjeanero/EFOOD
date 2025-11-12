import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Form, InputGroup, Row, ButtonContainer } from './styles'

const schema = yup.object({
  receiver: yup.string().required('O nome é obrigatório'),
  address: yup
    .object({
      description: yup.string().required('O endereço é obrigatório'),
      city: yup.string().required('A cidade é obrigatória'),
      zipCode: yup
        .string()
        .required('O CEP é obrigatório')
        .min(8, 'O CEP deve ter 8 dígitos')
        .max(8, 'O CEP deve ter 8 dígitos'),
      number: yup
        .number()
        .typeError('Informe um número válido')
        .required('O número é obrigatório')
        .min(1, 'Informe o número'),
      complement: yup.string()
    })
    .required()
}).required()

type FormData = yup.InferType<typeof schema>

type Props = {
  onBack: () => void
  onSubmit: (data: FormData) => void
}

const DeliveryForm = ({ onBack, onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const handleFormSubmit = (data: FormData) => {
    onSubmit(data)
  }

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <h3>Entrega</h3>

      <InputGroup>
        <label htmlFor="receiver">Quem irá receber</label>
        <input
          id="receiver"
          {...register('receiver')}
          className={errors.receiver ? 'error' : ''}
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="address">Endereço</label>
        <input
          id="address"
          {...register('address.description')}
          className={errors.address?.description ? 'error' : ''}
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="city">Cidade</label>
        <input
          id="city"
          {...register('address.city')}
          className={errors.address?.city ? 'error' : ''}
        />
      </InputGroup>
      <Row>
        <InputGroup>
          <label htmlFor="cep">CEP</label>
          <input
            id="cep"
            {...register('address.zipCode')}
            className={errors.address?.zipCode ? 'error' : ''}
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="number">Número</label>
          <input
            id="number"
            {...register('address.number')}
            className={errors.address?.number ? 'error' : ''}
          />
        </InputGroup>
      </Row>
      <InputGroup>
        <label htmlFor="complement">Complemento (opcional)</label>
        <input id="complement" {...register('address.complement')} />
      </InputGroup>

      <ButtonContainer>
        <button type="submit">Continuar com o pagamento</button>
        <button type="button" onClick={onBack}>
          Voltar para o carrinho
        </button>
      </ButtonContainer>
    </Form>
  )
}

export default DeliveryForm
