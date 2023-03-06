import { InputLabel } from '../../modules/labeler/components/InputLabel';
import { LabelerList } from '../../modules/labeler/components/LabelerList';
import { LabelerMediaControl } from '../../modules/labeler/components/LabelerMediaControl';
import { LabelerMediaDescription } from '../../modules/labeler/components/LabelerMediaDescription';
import { LabelerMediaViwer } from '../../modules/labeler/components/LabelerMediaViwer';
import { MediaSave } from '../../modules/labeler/components/MediaSave';
import { SaveButton } from '../../modules/labeler/components/MediaSave/components/SaveButton';
import { LabelerDataProvider } from '../../modules/labeler/providers/LabelerDataProvider';
import { LabelerProvider } from '../../modules/labeler/providers/LabelerProvider';
import {
  ControllersWrapper,
  FooterPartners,
  PartnersDisclaimer,
  PartnersImage,
  AsideList,
  StyledContainer,
  StyledFooter,
  StyledHeader,
  StyledLogo,
  StyledMain,
  SectionDescription,
  AsideSave,
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
          <AsideList>
            <LabelerList />
          </AsideList>
          <SectionDescription>
            <LabelerMediaDescription />
          </SectionDescription>
          <AsideSave>
            <MediaSave />
          </AsideSave>
        </LabelerProvider>
      </LabelerDataProvider>
      <StyledFooter>
        <FooterPartners>
          <PartnersImage src="images/ibama.png" />
          <PartnersImage src="images/uenf.png" />
          <PartnersImage src="images/petrobras.png" />
          <PartnersImage src="images/ipead.png" />
        </FooterPartners>
        <PartnersDisclaimer>
          A realização do Projeto Pescarte é uma medida de mitigação exigida
          <br /> pelo licenciamento ambiental federal, conduzido pelo IBAMA.
        </PartnersDisclaimer>
      </StyledFooter>
    </StyledContainer>
  );
};

export default HomePage;
