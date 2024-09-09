'use client';
import { useDarkMode } from '@/hooks';
import { colors } from '@/utils';
import { Drawer as DrawerBase } from '@mui/material';
import { FC, useState } from 'react';
import styles from './Drawer.module.scss';
type DrawerProps = {
  children: any;
  open: boolean;
  className?: string;
  onClose: (value: boolean) => void;
};

const Drawer: FC<DrawerProps> = ({
  children,
  open = false,
  className,
  onClose,
}: DrawerProps) => {
  return (
    <DrawerBase
      className={`${styles.DrawerStyle} ${className}`}
      onClose={() => onClose(false)}
      open={open}
    >
      {children}
    </DrawerBase>
  );
};
export default Drawer;
