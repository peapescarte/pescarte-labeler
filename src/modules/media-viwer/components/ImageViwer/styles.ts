import styled from 'styled-components';

export const StyledImageViwer = styled.div`
  width: 100%;
  height: 100%;
`;

type StyledImageProps = {
  isLoading: boolean;
};
export const StyledImage = styled.img<StyledImageProps>`
  width: 100%;
  height: 100%;
  visibility: ${(props) => (props.isLoading ? 'hidden' : 'visible')};
`;
