import ProductList from '../../components/ProductList'
import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()
  const { data: simulationGmaes } = useGetSimulationGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()

  if (actionGames && sportGames && simulationGmaes && fightGames && rpgGames) {
    return (
      <>
        <ProductList games={actionGames} title="Ação" background="black" />
        <ProductList games={sportGames} title="Esportes" background="gray" />
        <ProductList
          games={simulationGmaes}
          title="Simulação"
          background="black"
        />
        <ProductList games={fightGames} title="Luta" background="gray" />
        <ProductList games={rpgGames} title="RPG" background="black" />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Categories
