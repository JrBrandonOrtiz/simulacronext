
import React from 'react';
import HeroText from '../molecules/HeroText';
import Button from '../atoms/Button';
import styles from '@/styles/organisms/_heroSection.module.scss';

const HeroSection = () => (
  <section className={styles.heroSection}>
    <HeroText />
    <div className={styles.actions}>
      <Button text="Explorar Proyectos" />
      <Button text="Comenzar como Organizador" variant="secondary" />
    </div>
  </section>
);

export default HeroSection;
