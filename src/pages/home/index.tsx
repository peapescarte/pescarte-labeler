import { InputLabel } from '../../modules/labeler/components/InputLabel';
import { LabelerList } from '../../modules/labeler/components/LabelerList';
import { LabelerMediaControl } from '../../modules/labeler/components/LabelerMediaControl';
import { LabelerMediaViwer } from '../../modules/labeler/components/LabelerMediaViwer';
import { LabelerDataProvider } from '../../modules/labeler/providers/LabelerDataProvider';
import { LabelerProvider } from '../../modules/labeler/providers/LabelerProvider';
import {
  ControllersWrapper,
  StyledAside,
  StyledContainer,
  StyledFooter,
  StyledHeader,
  StyledMain,
} from './styles';

const HomePage = () => {
  return (
    <StyledContainer>
      <StyledHeader>
        <h1>Pescarte Labeler</h1>
      </StyledHeader>
      <LabelerDataProvider>
        <LabelerProvider>
          <StyledMain>
            <LabelerMediaViwer />
            <ControllersWrapper>
              <InputLabel />
              <LabelerMediaControl />
            </ControllersWrapper>
          </StyledMain>
          <StyledAside>
            <LabelerList />
          </StyledAside>
        </LabelerProvider>
      </LabelerDataProvider>
      <StyledFooter>a</StyledFooter>
    </StyledContainer>
  );
};

export default HomePage;
