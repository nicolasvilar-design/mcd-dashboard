import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button visual variant */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /** Button size */
  size?: 'small' | 'medium' | 'large';
  /** Whether the button is full width */
  fullWidth?: boolean;
  /** Loading state */
  isLoading?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Icon to display (left side) */
  icon?: React.ReactNode;
  /** Icon to display (right side) */
  iconRight?: React.ReactNode;
  /** Children content */
  children?: React.ReactNode;
}

/**
 * Button component for McDonald's Dashboard
 * 
 * Primary: McDonald's Red - for main actions
 * Secondary: Light gray - for secondary actions
 * Tertiary: Text only - for less important actions
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      fullWidth = false,
      isLoading = false,
      disabled = false,
      icon,
      iconRight,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    // Base styles
    const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-150 cubic-bezier(0.4, 0, 0.2, 1)';

    // Variant styles
    const variantStyles = {
      primary: 'bg-[#DA291C] text-white hover:bg-[#c41f14] active:bg-[#b01910] disabled:bg-[#BDBDBD] disabled:text-white',
      secondary: 'bg-[#E8E8E8] text-[#292929] hover:bg-[#d0d0d0] active:bg-[#b8b8b8] disabled:bg-[#F5F5F5] disabled:text-[#BDBDBD]',
      tertiary: 'bg-transparent text-[#292929] hover:bg-[#F5F5F5] active:bg-[#E8E8E8] disabled:text-[#BDBDBD]',
    };

    // Size styles
    const sizeStyles = {
      small: 'px-3 py-2 text-xs h-8',
      medium: 'px-4 py-2 text-sm h-10',
      large: 'px-6 py-3 text-base h-12',
    };

    const fullWidthStyle = fullWidth ? 'w-full' : '';
    const disabledStyle = disabled ? 'opacity-60 cursor-not-allowed' : '';

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidthStyle} ${disabledStyle} ${className}`}
        {...props}
      >
        {isLoading && (
          <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
        )}
        {!isLoading && icon && <span>{icon}</span>}
        {children}
        {!isLoading && iconRight && <span>{iconRight}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
