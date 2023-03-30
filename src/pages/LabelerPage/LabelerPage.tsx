import Skeleton from 'react-loading-skeleton';
import { Header } from '../../components/Header';
import { LabelerList } from '../../modules/labeler/components/LabelerList';
import { LabelerMediaControl } from '../../modules/labeler/components/LabelerMediaControl';
import { LabelerMediaDescription } from '../../modules/labeler/components/LabelerMediaDescription';
import {
  MediaDescriptionDataText,
  MediaDescriptionDataTextHeader,
} from '../../modules/labeler/components/LabelerMediaDescription/styles';
import { LabelerMediaViwer } from '../../modules/labeler/components/LabelerMediaViwer';
import { MediaSave } from '../../modules/labeler/components/MediaSave';
import { useContextLabeler } from '../../modules/labeler/providers/LabelerProvider';
import {
  AsideList,
  AsideSave,
  ControllersWrapper,
  FooterPartners,
  LabelerPageHeader,
  PartnersDisclaimer,
  PartnersImage,
  SectionDescription,
  StyledContainer,
  StyledFooter,
  StyledMain,
} from './styles';

export const LabelerPage = () => {
  const { activatedMedia } = useContextLabeler();

  return (
    <StyledContainer>
      <LabelerPageHeader>
        <Header />
      </LabelerPageHeader>
      <StyledMain>
        <LabelerMediaViwer />
        <ControllersWrapper>
          <MediaDescriptionDataText>
            <MediaDescriptionDataTextHeader>Nome da mídia:</MediaDescriptionDataTextHeader>
            {activatedMedia?.filename || <Skeleton width={200} />}
          </MediaDescriptionDataText>
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
      <StyledFooter>
        <FooterPartners>
          <PartnersImage src="/images/ibama.png" />
          <PartnersImage src="/images/uenf.png" />
          <PartnersImage src="/images/petrobras.png" />
          <PartnersImage src="/images/ipead.png" />
        </FooterPartners>
        <PartnersDisclaimer>
          A realização do Projeto Pescarte é uma medida de mitigação exigida
          <br /> pelo licenciamento ambiental federal, conduzido pelo IBAMA.
        </PartnersDisclaimer>
      </StyledFooter>
    </StyledContainer>
  );
};
