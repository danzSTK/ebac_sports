import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../produto/slice'

const initialState: Product[] = []

export const favoritoSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    setFavorito: (state, action: PayloadAction<Product>) => {
      state.push(action.payload)
    },

    removeFavorito: (state, action: PayloadAction<Product>) => {
      return state.filter((product) => product.id !== action.payload.id)
    }
  }
})

export const { removeFavorito, setFavorito } = favoritoSlice.actions
export default favoritoSlice.reducer
