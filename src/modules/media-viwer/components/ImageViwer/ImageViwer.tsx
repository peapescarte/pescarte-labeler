import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import {
  ImageLoadingText,
  ImageLoadingWrapper,
  StyledImage,
  StyledImageViwer,
  imageObjectFit,
} from './styles';

type ImageViwerProps = {
  src: string;
  alt: string;
  loadingText?: string;
  errorMessage?: string;
  isSensive?: boolean;
  objectFit?: imageObjectFit;
  className?: string;
};

/**
 * Componente para exibição de imagem
 * @param string src - url para imagem
 * @param string alt - texto alternativo da imagem
 * @param string loadingText - texto exibido em quanto imagem é carregada
 * @param string errorMessage - texto exibido caso ocorra algum erro ao carregar a imagem
 * @param string objectFit - propriedade css object-fit
 * @param string isSensive - ativa/desativda o modo de dado sensivel
 * @param string className - className para poder editar estilos do container principal
 */
export const ImageViwer = ({
  src,
  alt,
  loadingText = '',
  errorMessage = '',
  isSensive = false,
  objectFit = 'cover',
  className,
}: ImageViwerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, [src]);

  return (
    <StyledImageViwer className={className}>
      {(isLoading || error) && (
        <ImageLoadingWrapper>
          <Skeleton width="100%" height="100%" />
          <ImageLoadingText>{isLoading ? loadingText : errorMessage}</ImageLoadingText>
        </ImageLoadingWrapper>
      )}
      <StyledImage
        isBlurred={isSensive}
        src={src}
        alt={alt}
        onLoad={() => setIsLoading(false)}
        showImage={!isLoading && !error}
        objectFit={objectFit}
        onError={() => {
          setIsLoading(false);
          setIsError(true);
        }}
      />
    </StyledImageViwer>
  );
};
