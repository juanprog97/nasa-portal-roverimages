'use client';
import { useDarkMode } from '@/hooks';
import { colors } from '@/utils';
import { Drawer as DrawerBase } from '@mui/material';
import { FC, useState } from 'react';
import styles from './Drawer.module.scss';

type DrawerProps = {
  children: any;
  open: boolean;
  onClose: (value: boolean) => void;
};

const Drawer: FC<DrawerProps> = ({
  children,
  open = false,
  onClose,
}: DrawerProps) => {
  return (
    <DrawerBase
      className={styles.DrawerStyle}
      onClose={() => onClose(false)}
      open={open}
    >
      {children}
    </DrawerBase>
  );
};
export default Drawer;
