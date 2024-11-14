// src/UI/atoms/Input.tsx
import React from 'react';
import styles from '@/styles/atoms/_input.module.scss';

type InputProps = {
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange }) => (
  <input className={styles.input} type={type} placeholder={placeholder} value={value} onChange={onChange} />
);

export default Input;
