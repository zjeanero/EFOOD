
import styled from 'styled-components'
import { cores } from '../../styles'

export const Form = styled.form`
  color: ${cores.bege};
  font-weight: bold;
  font-size: 14px;

  h3 {
    font-size: 16px;
    margin-bottom: 16px;
  }
`
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;

  label {
    margin-bottom: 8px;
  }

  input {
    background-color: ${cores.bege};
    border: 1px solid ${cores.bege};
    height: 32px;
    padding: 0 8px;
    font-size: 14px;

    &.error {
      border: 1px solid red;
    }
  }
`
export const Row = styled.div`
  display: flex;
  gap: 34px;

  ${InputGroup} {
    flex: 1;
  }
`
export const ButtonContainer = styled.div`
  margin-top: 24px;

  button {
    background-color: ${cores.bege};
    color: ${cores.laranja};
    border: none;
    width: 100%;
    padding: 4px 0;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }

  button:last-child {
    margin-top: 8px;
  }
`
