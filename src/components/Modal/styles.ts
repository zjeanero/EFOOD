import styled from 'styled-components'
import { cores } from '../../styles'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  background-color: ${cores.laranja};
  color: ${cores.branco};
  padding: 32px;
  position: relative;
  z-index: 1;
  display: flex;
  gap: 24px;
  width: 1024px;
  max-width: 90vw;
  display: flex;
  gap: 24px;

  h4 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }

  button {
    background-color: ${cores.bege};
    color: ${cores.laranja};
    border: none;
    padding: 4px 8px;
    cursor: pointer;
    font-weight: bold;
  }
`

export const CloseIcon = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
  cursor: pointer;
  object-fit: cover;
`

export const ProductImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
`
