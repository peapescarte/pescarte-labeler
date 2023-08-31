import { StyledButton, StyledButtonVariants } from './styles';

type ButtonTypes = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: StyledButtonVariants;
  className?: string;
};

export const Button = ({ children, variant = 'primary', className, ...props }: ButtonTypes) => {
  return (
    <StyledButton {...props} variant={variant} className={className}>
      {children}
    </StyledButton>
  );
};
