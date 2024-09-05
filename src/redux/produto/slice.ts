import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Product {
  id: number
  nome: string
  preco: number
  imagem: string
}

const initialState: Product[] = []

export const produtoSlice = createSlice({
  name: 'produto',
  initialState,
  reducers: {
    setProduto: (state, action: PayloadAction<Product[]>) => {
      return action.payload
    }
  }
})

export const { setProduto } = produtoSlice.actions
export default produtoSlice.reducer
