import { useEffect, useState } from 'react';
import { StyledImage, StyledImageViwer } from './styles';

type ImageViwerProps = {
  src: string;
  alt: string;
};

export const ImageViwer = ({ src, alt }: ImageViwerProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [src]);

  return (
    <StyledImageViwer>
      {isLoading && <p>Carregando imagem..</p>}
      <StyledImage src={src} alt={alt} onLoad={() => setIsLoading(false)} isLoading={isLoading} />
    </StyledImageViwer>
  );
};
