import React from 'react';
import Button from '../atoms/Button';
import styles from '@/styles/molecules/_headerActions.module.scss';

const HeaderActions = () => (
  <div className={styles.headerActions}>
    <Button text="Iniciar sesión" variant="secondary" />
    <Button text="Registrarse" />
  </div>
);

export default HeaderActions;
