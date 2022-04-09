import React from 'react';

interface IButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  classes: string | undefined;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
}

const Button = (props: IButtonProps) => {
  const { onClick, children, classes, type, disabled } = props;
  const buttonClasses = `button ${classes}`;
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
