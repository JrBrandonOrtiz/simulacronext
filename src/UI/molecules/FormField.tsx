// src/UI/molecules/FormField.tsx
import React from 'react';
import Input from '../atoms/Input';
import styles from '@/styles/molecules/_formField.module.scss';

type FormFieldProps = {
  label: string;
  type: string;
  placeholder: string;
};

const FormField: React.FC<FormFieldProps> = ({ label, type, placeholder }) => (
  <div className={styles.formField}>
    <label className={styles.label}>{label}</label>
    <Input type={type} placeholder={placeholder} />
  </div>
);

export default FormField;
