import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../produto/slice'

const initialState: Product[] = []

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    setCarrinho: (state, action: PayloadAction<Product>) => {
      if (state.find((p) => p.id === action.payload.id)) {
        alert('Esse produto já está no carrinho')
        return
      } else state.push(action.payload)
    }
  }
})

export const { setCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
