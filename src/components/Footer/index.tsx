import { Container, FooterSection, Links, SectionTitle, Link } from './styles'

const currentTear = new Date().getFullYear()

const Footer = () => {
  return (
    <Container>
      <div className="container">
        <FooterSection>
          <SectionTitle>Categorias</SectionTitle>
          <Links>
            <li>
              <Link to="/categories#rpg">RPG</Link>
            </li>
            <li>
              <Link to="/categories#actions">Ação</Link>
            </li>
            <li>
              <Link to="/categories#sports">Esportes</Link>
            </li>
            <li>
              <Link to="/categories#simulation">Simulação</Link>
            </li>
            <li>
              <Link to="/categories#fight">Luta</Link>
            </li>
          </Links>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Acesso rápido</SectionTitle>
          <Links>
            <li>
              <Link to="/#on-sale">Promoções</Link>
            </li>
            <li>
              <Link to="/#coming-soon">Em breve</Link>
            </li>
          </Links>
        </FooterSection>
        <p>{currentTear} - &copy; E-PLAY Todos os direitos reservados</p>
      </div>
    </Container>
  )
}

export default Footer
