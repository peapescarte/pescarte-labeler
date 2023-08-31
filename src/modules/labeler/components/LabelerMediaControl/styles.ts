import styled, { css } from 'styled-components';
import { Button } from '../../../../components/Button';

export const StyledMediaControlContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  margin-left: auto;
`;

export const StyledMediaControlButton = styled.button`
  border-radius: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const StyledMediaControlCounter = styled.span`
  ${({ theme }) => css`
    width: 7rem;
    font-size: ${theme.fontSizes.regular};
    color: ${theme.colors.neutra80};
    display: flex;
    justify-content: center;
  `}
`;

export const SaveButton = styled(Button)`
  margin: 0 0.8rem;
  padding: 1.2rem;
`;
