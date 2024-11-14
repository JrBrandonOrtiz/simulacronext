// src/UI/templates/AuthTemplate.tsx
import React from 'react';
import AuthForm from '../organisms/AuthForm';
import styles from '@/styles/templates/_authTemplate.module.scss';

type AuthTemplateProps = {
  formType: 'login' | 'register';
};

const AuthTemplate: React.FC<AuthTemplateProps> = ({ formType }) => (
  <div className={styles.authTemplate}>
    <AuthForm formType={formType} />
  </div>
);

export default AuthTemplate;
