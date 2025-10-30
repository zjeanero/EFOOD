import styled from 'styled-components'
import { cores } from '../../styles'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`

export const Sidebar = styled.aside`
  background-color: ${cores.laranja};
  color: ${cores.bege};
  z-index: 1;
  padding: 32px 8px;
  width: 360px;
  height: 100%;

  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ItemsList = styled.ul`
  flex: 1;
  overflow-y: auto;
`

export const Total = styled.p`
  font-weight: bold;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;
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

export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.bege};
  padding: 8px;
  margin-bottom: 16px;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 10px;

    h4 {
      font-size: 18px;
      font-weight: bold;
      color: ${cores.laranja};
      margin: 0;
      margin-bottom: 8px;
    }

    p {
      font-size: 14px;
      color: ${cores.laranja};
      margin: 0;
    }
  }

  button {
    position: absolute;
    bottom: 8px;
    right: 8px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    color: ${cores.laranja};
  }
`
