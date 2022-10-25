import { StyledImage, StyledImageViwer } from './styles';

type ImageViwerProps = {
  src: string;
  alt: string;
};

export const ImageViwer = ({ src, alt }: ImageViwerProps) => {
  return (
    <StyledImageViwer>
      <StyledImage src={src} alt={alt} />
    </StyledImageViwer>
  );
};
