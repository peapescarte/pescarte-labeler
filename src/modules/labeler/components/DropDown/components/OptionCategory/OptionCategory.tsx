import { StyledOptionCategory } from './styles';

type OptionCategoryProps = {
  children: React.ReactNode;
  value: string;
  OnClickCallback: (value: string) => void;
};

/**
 * Componente que personaliza a opção da dropdown
 */
export const OptionCategory = ({ children, value, OnClickCallback }: OptionCategoryProps) => {
  return (
    <StyledOptionCategory onClick={() => OnClickCallback(value)}>{children}</StyledOptionCategory>
  );
};
