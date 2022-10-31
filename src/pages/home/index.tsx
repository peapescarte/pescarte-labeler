import { InputLabel } from '../../modules/labeler/components/InputLabel';
import { LabelerList } from '../../modules/labeler/components/LabelerList';
import { LabelerProvider } from '../../modules/labeler/providers/LabelerProvider';
import { ImageViwer } from '../../modules/media-viwer/components/ImageViwer';
import {
  InputLabelWrapper,
  MediaViwerWrapper,
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
        <h1>Pescarte</h1>
      </StyledHeader>
      <LabelerProvider>
        <StyledMain>
          <MediaViwerWrapper>
            <ImageViwer
              src="https://drive.google.com/uc?export=view&id=1g_BdJi-TMgLJ--hOUb4wX9nd9dBSUcrR"
              alt="Peixes_em_rede_de_Armação_dos_Búzios_RJ"
            />
          </MediaViwerWrapper>
          <InputLabelWrapper>
            <InputLabel />
          </InputLabelWrapper>
        </StyledMain>
        <StyledAside>
          <LabelerList />
        </StyledAside>
      </LabelerProvider>
      <StyledFooter>a</StyledFooter>
    </StyledContainer>
  );
};

export default HomePage;
