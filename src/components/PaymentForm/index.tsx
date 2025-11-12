import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Form, InputGroup, Row, ButtonContainer } from './styles'

const schema = yup.object({
  card: yup
    .object({
      name: yup.string().required('O nome no cartão é obrigatório'),
      number: yup
        .string()
        .required('O número do cartão é obrigatório')
        .min(16, 'O número deve ter 16 dígitos')
        .max(16, 'O número deve ter 16 dígitos'),
      code: yup
        .number()
        .typeError('CVV inválido')
        .required('O CVV é obrigatório')
        .min(100, 'O CVV deve ter 3 dígitos')
        .max(999, 'O CVV deve ter 3 dígitos'),
      expires: yup
        .object({
          month: yup
            .number()
            .typeError('Mês inválido')
            .required('O mês é obrigatório')
            .min(1, 'Mês inválido')
            .max(12, 'Mês inválido'),
          year: yup
            .number()
            .typeError('Ano inválido')
            .required('O ano é obrigatório')
            .min(new Date().getFullYear(), 'O ano deve ser atual ou futuro')
        })
        .required()
    })
    .required()
}).required()

type FormData = yup.InferType<typeof schema>

const formatCurrency = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

type Props = {
  onBack: () => void
  onPay: (data: FormData) => void
  isLoading: boolean
  total: number
}

const PaymentForm = ({ onBack, onPay, isLoading, total }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const handleFormSubmit = (data: FormData) => {
    onPay(data)
  }

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <h3>Pagamento - Valor a pagar {formatCurrency(total)}</h3>

      <InputGroup>
        <label htmlFor="cardName">Nome no cartão</label>
        <input
          id="cardName"
          {...register('card.name')}
          className={errors.card?.name ? 'error' : ''}
        />
      </InputGroup>
      <Row>
        <InputGroup>
          <label htmlFor="cardNumber">Número do cartão</label>
          <input
            id="cardNumber"
            {...register('card.number')}
            className={errors.card?.number ? 'error' : ''}
          />
        </InputGroup>
        <InputGroup style={{ maxWidth: '87px' }}>
          <label htmlFor="cardCode">CVV</label>
          <input
            id="cardCode"
            {...register('card.code')}
            className={errors.card?.code ? 'error' : ''}
          />
        </InputGroup>
      </Row>
      <Row>
        <InputGroup>
          <label htmlFor="expiresMonth">Mês de vencimento</label>
          <input
            id="expiresMonth"
            {...register('card.expires.month')}
            className={errors.card?.expires?.month ? 'error' : ''}
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="expiresYear">Ano de vencimento</label>
          <input
            id="expiresYear"
            {...register('card.expires.year')}
            className={errors.card?.expires?.year ? 'error' : ''}
          />
        </InputGroup>
      </Row>

      <ButtonContainer>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Finalizando...' : 'Finalizar pagamento'}
        </button>
        <button type="button" onClick={onBack} disabled={isLoading}>
          Voltar para a edição de endereço
        </button>
      </ButtonContainer>
    </Form>
  )
}

export default PaymentForm
