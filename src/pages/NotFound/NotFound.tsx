import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header';
import { NotFoundContainer, NotFoundText, StyledContainer } from './styles';

export const NotFound = () => {
  return (
    <StyledContainer>
      <Header />
      <NotFoundContainer>
        <NotFoundText>Rota não encontrada!</NotFoundText>
      </NotFoundContainer>
      <Footer />
    </StyledContainer>
  );
};
