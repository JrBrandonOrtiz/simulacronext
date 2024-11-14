// src/UI/atoms/TextLink.tsx
import React from 'react';
import styles from '@/styles/atoms/_textLink.module.scss';

type TextLinkProps = {
  text: string;
  href: string;
};

const TextLink: React.FC<TextLinkProps> = ({ text, href }) => (
  <a className={styles.textLink} href={href}>
    {text}
  </a>
);

export default TextLink;
