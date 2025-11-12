
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { CardapioItem } from '../../pages/Perfil'

type CartState = {
  items: CardapioItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    add: (state, action: PayloadAction<CardapioItem>) => {
      const itemJaExiste = state.items.find(
        (item) => item.id === action.payload.id
      )

      if (!itemJaExiste) {
        state.items.push(action.payload)
      } else {
        alert('Este item já foi adicionado ao carrinho.')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      )
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { open, close, add, remove,clear } = cartSlice.actions

export default cartSlice.reducer
