import { LabelerList } from '../../modules/labeler/components/LabelerList';
import { ImageViwer } from '../../modules/media-viwer/components/ImageViwer';
import { StyledContainer, StyledHeader, StyledMain, StyledAside, StyledFooter } from './styles';

const HomePage = () => {
  return (
    <StyledContainer>
      <StyledHeader>
        <h1>Pescarte</h1>
      </StyledHeader>
      <StyledMain>
        <ImageViwer
          src="https://drive.google.com/uc?export=view&id=1g_BdJi-TMgLJ--hOUb4wX9nd9dBSUcrR"
          alt="Peixes_em_rede_de_Armação_dos_Búzios_RJ"
        />
      </StyledMain>
      <StyledAside>
        <LabelerList />
      </StyledAside>
      <StyledFooter></StyledFooter>
    </StyledContainer>
  );
};

export default HomePage;
