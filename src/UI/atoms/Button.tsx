import React from 'react';
import styles from '@/styles/atoms/_button.module.scss';

type ButtonProps = {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
};

const Button = ({ text, onClick, variant = 'primary' }: ButtonProps) => (
  <button onClick={onClick} className={`${styles.button} ${styles[variant]}`}>
    {text}
  </button>
);

export default Button;
