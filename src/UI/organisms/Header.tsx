import React from 'react';
import Logo from '../atoms/Logo';
import HeaderActions from '../molecules/HeaderActions';
import styles from '@/styles/organisms/_header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <Logo />
    <HeaderActions />
  </header>
);

export default Header;
