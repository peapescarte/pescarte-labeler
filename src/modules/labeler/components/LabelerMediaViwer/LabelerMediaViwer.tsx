import Skeleton from 'react-loading-skeleton';
import { ImageViwer } from '../../../media-viwer/components/ImageViwer';
import { useContextLabeler } from '../../providers/LabelerProvider';
import { MediaLoadingText, MediaLoadingWrapper, MediaViwerWrapper } from './styles';

export const LabelerMediaViwer = () => {
  const { activatedMedia } = useContextLabeler();
  return (
    <MediaViwerWrapper>
      {activatedMedia ? (
        <ImageViwer
          isSensive={activatedMedia.sensible}
          src={activatedMedia.link}
          alt={activatedMedia.altText}
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
