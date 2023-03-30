import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { ImageLoadingText, ImageLoadingWrapper, StyledImage, StyledImageViwer } from './styles';

type ImageViwerProps = {
  src: string;
  alt: string;
  isSensive: boolean;
};

export const ImageViwer = ({ src, alt, isSensive }: ImageViwerProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [src]);

  return (
    <StyledImageViwer>
      {isLoading && (
        <ImageLoadingWrapper>
          <Skeleton width="100%" height="100%" />
          <ImageLoadingText>Carregando imagem..</ImageLoadingText>
        </ImageLoadingWrapper>
      )}
      <StyledImage
        isBlurred={isSensive}
        src={src}
        alt={alt}
        onLoad={() => setIsLoading(false)}
        isLoading={isLoading}
      />
    </StyledImageViwer>
  );
};
