import styled from 'styled-components'
import { cores } from '../../styles'

export const CardContainer = styled.div`
  background-color: ${cores.laranja};
  color: ${cores.bege};
  padding: 8px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const ProductImage = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
  display: block;
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin-top: 8px;
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
`

export const AddButton = styled.button`
  background-color: ${cores.bege};
  color: ${cores.laranja};
  border: none;
  width: 100%;
  padding: 4px 0;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin-top: auto;
`
