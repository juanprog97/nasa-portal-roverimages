'use client';
import { useScrollObserver } from '@/hooks';
import styles from './Navbar.module.scss';
import { LogoNasa } from '@/components/atoms';
import { SwitchDarkMode } from '@/components/molecules';

const Navbar = () => {
  const { isAtTop } = useScrollObserver(3);

  return (
    <nav data-top={isAtTop} className={styles.NavBarStyle}>
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
