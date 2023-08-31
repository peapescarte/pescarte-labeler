import Skeleton from 'react-loading-skeleton';
import { Footer } from '../../components/Footer/Footer';
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
  LabelerPageHeader,
  SectionDescription,
  StyledContainer,
  StyledFooter,
  StyledMain,
} from './styles';

/**
 * Componente pagina labeler
 * Pagina que agrega os componentes de adição, atualização e removação de etiquetas
 * Também exibe a midia e suas informações a serem editadas
 */
export const LabelerPage = () => {
  const { activatedMedia, haveChanges } = useContextLabeler();

  return (
    <StyledContainer>
      <LabelerPageHeader>
        <Header haveChanges={haveChanges} />
      </LabelerPageHeader>
      <StyledMain>
        <LabelerMediaViwer />
        <ControllersWrapper>
          <MediaDescriptionDataTextHeader>Nome da mídia:</MediaDescriptionDataTextHeader>
          <MediaDescriptionDataText title={activatedMedia?.filename}>
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
        <Footer />
      </StyledFooter>
    </StyledContainer>
  );
};
