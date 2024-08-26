import Product from '../Product'
import { Container, List, Title } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductList = ({ background, title }: Props) => {
  return (
    <Container background={background}>
      <div className="container">
        <Title>{title}</Title>
        <List>
          <Product
            title="Nome do jogo"
            category="Ação"
            system="Windows"
            description="teste"
            infos={['-10%', 'R$ 150']}
            image="//placehold.it/222x250"
          />
          <Product
            title="Nome do jogo"
            category="Ação"
            system="Windows"
            description="teste"
            infos={['-10%', 'R$ 150']}
            image="//placehold.it/222x250"
          />
          <Product
            title="Nome do jogo"
            category="Ação"
            system="Windows"
            description="teste"
            infos={['-10%', 'R$ 150']}
            image="//placehold.it/222x250"
          />
          <Product
            title="Nome do jogo"
            category="Ação"
            system="Windows"
            description="teste"
            infos={['-10%', 'R$ 150']}
            image="//placehold.it/222x250"
          />
        </List>
      </div>
    </Container>
  )
}

export default ProductList
