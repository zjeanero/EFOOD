
import styled from 'styled-components'
import { cores } from '../../styles'

export const MessageContainer = styled.div`
  color: ${cores.bege};
  font-size: 14px;
  line-height: 22px;

  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 24px;
  }
`
export const Button = styled.button`
  background-color: ${cores.bege};
  color: ${cores.laranja};
  border: none;
  width: 100%;
  padding: 4px 0;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`
