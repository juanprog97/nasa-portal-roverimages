'use client';
import { useScrollObserver } from '@/hooks';
import styles from './Navbar.module.scss';
import { LogoNasa } from '@/components/atoms';
import { SwitchDarkMode } from '@/components/molecules';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const { isAtTop } = useScrollObserver(3);
  const [hidden, setHidden] = useState<boolean>(false);

  useEffect(() => {
    setHidden(isAtTop);
  }, [isAtTop]);

  return (
    <nav data-top={hidden} className={styles.NavBarStyle}>
      <div className={styles.NavContainerElement}>
        <LogoNasa />
        <p className={styles.TextMessage}>
          Feel free to look at the photos of Mars🟠👨‍🚀📸
        </p>
        <SwitchDarkMode />
      </div>
    </nav>
  );
};

export default Navbar;
