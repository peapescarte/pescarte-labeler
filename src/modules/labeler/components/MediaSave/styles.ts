import styled, { css } from 'styled-components';

export const StyledMediaSave = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 1.6rem 0;
`;

export const ButtonContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.8rem;
  `}
`;
