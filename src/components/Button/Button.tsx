import React from 'react';
import './Button.css';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => (
  <button className="btn" disabled={disabled} onClick={onClick}>
    {label}
  </button>
);
