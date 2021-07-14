import React from 'react';
import { StyledButton } from './styles';
export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'secondary' | 'primary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  isFullWidth?: boolean;
}

export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & React.ComponentPropsWithoutRef<'button'>
>(({ children, variant, size, isFullWidth, ...props }, ref) => {
  return (
    <StyledButton
      ref={ref}
      type="button"
      variant={variant}
      size={size}
      isFullWidth={isFullWidth}
      {...props}
    >
      {children}
    </StyledButton>
  );
});

Button.defaultProps = {
  variant: 'secondary',
  size: 'medium',
  isFullWidth: false,
};
