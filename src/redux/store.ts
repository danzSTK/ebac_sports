import { configureStore } from '@reduxjs/toolkit'
import produtoReducer from './produto/slice'
import favoritoReducer from './Favoritos/slice'
import carrinhoReducer from './Carrinho/slice'

export const store = configureStore({
  reducer: {
    products: produtoReducer,
    favoritos: favoritoReducer,
    carrinho: carrinhoReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
