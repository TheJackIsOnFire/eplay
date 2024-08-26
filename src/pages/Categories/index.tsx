import ProductList from '../../components/ProductList'
import Game from '../../models/Game'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'
import streetFighter from '../../assets/images/street_fighter.png'
import fifa from '../../assets/images/fifa_23.png'

const promocoes: Game[] = [
  {
    title: 'Resident Evil 4',
    category: 'Ação',
    system: 'Windows',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    infos: ['-10%', 'R$ 250,00'],
    image: resident,
    id: 1
  },
  {
    title: 'Resident Evil 4',
    category: 'Ação',
    system: 'PS5',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    infos: ['-5%', 'R$ 290,00'],
    image: resident,
    id: 2
  },
  {
    title: 'FIFA 23',
    category: 'Esporte',
    system: 'Windows',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    infos: ['-50%', 'R$ 99,00'],
    image: fifa,
    id: 3
  },
  {
    title: 'FIFA 23',
    category: 'Esporte',
    system: 'PS5',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    infos: ['-40%', 'R$ 120,00'],
    image: fifa,
    id: 4
  }
]

const emBreve: Game[] = [
  {
    title: 'Diablo 4',
    category: 'RPG',
    system: 'Windows',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    infos: ['17/05'],
    image: diablo,
    id: 5
  },
  {
    title: 'The Legend of Zelda - TOK',
    category: 'RPG',
    system: 'Switch',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    infos: ['05/04'],
    image: zelda,
    id: 6
  },
  {
    title: 'Star Wars Jedi Survivor',
    category: 'Aventura',
    system: 'Windows',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    infos: ['05/04'],
    image: starWars,
    id: 7
  },
  {
    title: 'Street Fighter 6',
    category: 'Luta',
    system: 'Windows',
    description:
      'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',
    infos: ['06/05'],
    image: streetFighter,
    id: 8
  }
]

const Categories = () => {
  return (
    <>
      <ProductList games={emBreve} title="RPG" background="black" />
      <ProductList games={promocoes} title="Ação" background="gray" />
      <ProductList games={emBreve} title="Aventura" background="black" />
      <ProductList games={promocoes} title="FPS" background="gray" />
    </>
  )
}

export default Categories
