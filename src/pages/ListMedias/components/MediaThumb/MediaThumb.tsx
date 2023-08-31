import { EditButton } from '../EditButton';

import {
  MediaThumbContainer,
  MediaThumbOverlay,
  MediaThumbOverlayFooter,
  MediaThumbOverlayText,
  StyledMediaView,
} from './styles';

type MediaThumbProps = {
  id: string;
  url: string;
  alt?: string;
  author: string;
  onClickCallback: (id: string) => void;
  onClickEditCallback: (id: string) => void;
};

export const MediaThumb = ({
  id,
  url,
  alt = '',
  author,
  onClickCallback,
  onClickEditCallback,
}: MediaThumbProps) => {
  return (
    <MediaThumbContainer onClick={() => onClickCallback(id)}>
      <StyledMediaView src={url} alt={alt} errorMessage="Não foi possivel carregar a imagem." />
      <MediaThumbOverlay>
        <MediaThumbOverlayFooter>
          <MediaThumbOverlayText>{author}</MediaThumbOverlayText>
          <EditButton onClickCallback={() => onClickEditCallback(id)} />
        </MediaThumbOverlayFooter>
      </MediaThumbOverlay>
    </MediaThumbContainer>
  );
};
