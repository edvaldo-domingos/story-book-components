import React from 'react';
export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    variant?: 'secondary' | 'primary' | 'danger';
    size?: 'small' | 'medium' | 'large';
    isFullWidth?: boolean;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & Pick<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "key" | keyof React.ButtonHTMLAttributes<HTMLButtonElement>> & React.RefAttributes<HTMLButtonElement>>;
