import { FC } from 'react';
import { Dialog as DialogBase } from '@mui/material';
import { useDarkMode } from '@/hooks';
import { colors } from '@/utils';
import styles from './Dialog.module.scss';

type DialogProps = {
  open?: boolean;
  children?: any;
  className?: string;
};

const Dialog: FC<DialogProps> = ({
  open = false,
  children,
  className,
}: DialogProps) => {
  const { isDarkMode } = useDarkMode();

  return (
    <DialogBase
      fullScreen={true}
      className={`${styles.DialogStyle} ${className}`}
      open={true}
    >
      {children}
    </DialogBase>
  );
};

export default Dialog;
