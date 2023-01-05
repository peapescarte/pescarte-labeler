import { ImageViwer } from '../../../media-viwer/components/ImageViwer';
import { useContextLabeler } from '../../providers/LabelerProvider';
import { MediaViwerWrapper } from './styles';

export const LabelerMediaViwer = () => {
  const { activatedMedia } = useContextLabeler();
  return (
    <MediaViwerWrapper>
      {activatedMedia ? (
        <ImageViwer src={activatedMedia.link} alt="Imagem projeto pescarte" />
      ) : (
        <p>Sem imagem para classificar</p>
      )}
    </MediaViwerWrapper>
  );
};
