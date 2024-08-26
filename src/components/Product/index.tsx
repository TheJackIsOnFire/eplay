import Tag from '../Tag'
import { Card, Descrição, Titulo } from './styles'

const Product = () => {
  return (
    <Card>
      <img src="//placehold.it/222x250" />
      <Titulo>Nome do jogo</Titulo>
      <Tag>Categoria</Tag>
      <Tag>Windows</Tag>
      <Descrição>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
        delectus illum quod voluptate! Non praesentium, odit autem debitis
        officia, ipsam doloribus veritatis placeat enim aliquam laborum rem
        perferendis eveniet earum.
      </Descrição>
    </Card>
  )
}

export default Product
