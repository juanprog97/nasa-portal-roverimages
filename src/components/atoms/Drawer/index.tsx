'use client';
import { useDarkMode } from '@/hooks';
import { colors } from '@/utils';
import { Drawer as DrawerBase } from '@mui/material';
import { FC } from 'react';

type DrawerProps = {
  children: any;
  open: boolean;
};

const Drawer: FC<DrawerProps> = ({ children, open = false }: DrawerProps) => {
  const { isDarkMode } = useDarkMode();
  return (
    <DrawerBase
      sx={{
        '& .MuiDrawer-paper': {
          backgroundColor: isDarkMode ? colors['darkbg'] : colors['whitedirty'],
          color: isDarkMode ? colors['whitedirty'] : colors['darkbg'],
        },
      }}
      open={open}
    >
      {children}
    </DrawerBase>
  );
};
export default Drawer;
