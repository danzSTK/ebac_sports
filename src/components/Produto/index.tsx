import { Produto as ProdutoType } from '../../App'
import * as S from './styles'

import { useDispatch } from 'react-redux'
import { setFavorito, removeFavorito } from '../../redux/Favoritos/slice'
import { setCarrinho } from '../../redux/Carrinho/slice'
import { AppDispatch } from '../../redux/store'

type Props = {
  produto: ProdutoType
  estaNosFavoritos: boolean
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto, estaNosFavoritos }: Props) => {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      {estaNosFavoritos ? (
        <S.BtnComprar
          type="button"
          onClick={() => dispatch(removeFavorito(produto))}
        >
          - remover dos favoritos
        </S.BtnComprar>
      ) : (
        <S.BtnComprar
          type="button"
          onClick={() => dispatch(setFavorito(produto))}
        >
          + adicionar aos favoritos
        </S.BtnComprar>
      )}
      <S.BtnComprar
        onClick={() => dispatch(setCarrinho(produto))}
        type="button"
      >
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
