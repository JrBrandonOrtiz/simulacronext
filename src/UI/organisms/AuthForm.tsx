// src/UI/organisms/AuthForm.tsx
import React from 'react';
import Button from '../atoms/Button';
import FormField from '../molecules/FormField';
import TextLink from '../atoms/TextLink';
import styles from '@/styles/organisms/_authForm.module.scss';

type AuthFormProps = {
  formType: 'login' | 'register';
};

const AuthForm: React.FC<AuthFormProps> = ({ formType }) => (
  <div className={styles.authForm}>
    <h2>{formType === 'login' ? 'Iniciar Sesión' : 'Registrarse'}</h2>
    <p>{formType === 'login' ? 'Ingresa tus credenciales para acceder a tu cuenta' : 'Crea una cuenta para unirte'}</p>
    <FormField label="Correo Electrónico" type="email" placeholder="tu@ejemplo.com" />
    <FormField label="Contraseña" type="password" placeholder="Contraseña" />
    <Button text={formType === 'login' ? 'Iniciar Sesión' : 'Registrarse'} />
    {formType === 'login' ? (
      <>
        <TextLink text="¿Olvidaste tu contraseña?" href="#" />
        <TextLink text="¿No tienes una cuenta? Regístrate aquí" href="/register" />
      </>
    ) : (
      <TextLink text="¿Ya tienes una cuenta? Inicia sesión aquí" href="/login" />
    )}
  </div>
);

export default AuthForm;
