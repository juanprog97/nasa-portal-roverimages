'use client';
import { SwitchBase } from '@/atoms';
import { useDarkMode } from '@/hooks';
import styles from './SwitchDarkMode.module.scss';
import { useEffect, useState } from 'react';

const SwitchDarkMode = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  useEffect(() => {
    setModeDark(isDarkMode);
  }, [isDarkMode]);
  const [modeDark, setModeDark] = useState<boolean>(false);
  return (
    <SwitchBase
      className={styles.darkModeStyles}
      checked={modeDark}
      handleToggle={toggleDarkMode}
    />
  );
};

export default SwitchDarkMode;
