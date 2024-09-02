import { FC, useState, forwardRef, useEffect } from 'react';
import { Dialog as DialogBase, SxProps } from '@mui/material';
import { CSSProperties } from '@mui/material/styles/createMixins';
import { useDarkMode } from '@/hooks';
import { colors } from '@/utils';

type DialogProps = {
  open?: boolean;
  children?: any;
};

const Dialog: FC<DialogProps> = ({ open = false, children }: DialogProps) => {
  const { isDarkMode } = useDarkMode();

  return (
    <DialogBase
      sx={{
        '& .MuiDialog-paper': {
          backgroundColor:
            isDarkMode == 'dark' ? colors['darkbg'] : colors['whitedirty'],
        },
      }}
      fullScreen={true}
      open={open}
    >
      {children}
    </DialogBase>
  );
};

export default Dialog;
