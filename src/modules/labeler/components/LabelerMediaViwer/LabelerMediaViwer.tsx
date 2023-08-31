import Skeleton from 'react-loading-skeleton';
import { ImageViwer } from '../../../media-viwer/components/ImageViwer';
import { useContextLabeler } from '../../providers/LabelerProvider';
import { MediaLoadingText, MediaLoadingWrapper, MediaViwerWrapper } from './styles';

/**
 * Componente que é responsavel por controlar exibição de midias
 * A ideia é poder ser um switch entre diferentes tipos de midias e não apenas imagem.
 */
export const LabelerMediaViwer = () => {
  const { activatedMedia } = useContextLabeler();
  return (
    <MediaViwerWrapper>
      {activatedMedia ? (
        <ImageViwer
          isSensive={activatedMedia.sensible}
          src={activatedMedia.link}
          alt={activatedMedia.altText}
          loadingText="Carregando imagem.."
        />
      ) : (
        <MediaLoadingWrapper>
          <Skeleton width="100%" height="100%" />
          <MediaLoadingText>Buscando dados..</MediaLoadingText>
        </MediaLoadingWrapper>
      )}
    </MediaViwerWrapper>
  );
};
