'use client';
import { useScrollObserver } from '@/hooks';
import styles from './Navbar.module.scss';
import { useEffect } from 'react';
import { LogoNasa } from '@/components/atoms';

const Navbar = () => {
  const { isAtTop } = useScrollObserver(5);

  return (
    <nav data-top={isAtTop} className={styles.NavBarStyle}>
      <div className={styles.NavContainerElement}>
        <LogoNasa />
      </div>
    </nav>
  );
};

export default Navbar;
