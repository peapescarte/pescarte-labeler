import { InputLabel } from '../../modules/labeler/components/InputLabel';
import { LabelerList } from '../../modules/labeler/components/LabelerList';
import { LabelerMediaControl } from '../../modules/labeler/components/LabelerMediaControl';
import { LabelerMediaDescription } from '../../modules/labeler/components/LabelerMediaDescription';
import { LabelerMediaViwer } from '../../modules/labeler/components/LabelerMediaViwer';
import { LabelerDataProvider } from '../../modules/labeler/providers/LabelerDataProvider';
import { LabelerProvider } from '../../modules/labeler/providers/LabelerProvider';
import {
  ControllersWrapper,
  StyledAside,
  StyledContainer,
  StyledFooter,
  StyledHeader,
  StyledLogo,
  StyledMain,
  StyledSection,
} from './styles';

const HomePage = () => {
  return (
    <StyledContainer>
      <StyledHeader>
        <StyledLogo src="/pescarte_logo.png" />
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
          <StyledSection>
            <LabelerMediaDescription />
          </StyledSection>
        </LabelerProvider>
      </LabelerDataProvider>
      <StyledFooter>a</StyledFooter>
    </StyledContainer>
  );
};

export default HomePage;
