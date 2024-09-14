import { FC } from 'react';
import { Dialog as DialogBase } from '@mui/material';
import { useDarkMode } from '@/hooks';
import { colors } from '@/utils';
import styles from './Dialog.module.scss';

type DialogProps = {
  open?: boolean;
  children?: any;
  className?: string;
  actions: any;
};

const Dialog: FC<DialogProps> = ({
  open = false,
  children,
  actions,
  className,
}: DialogProps) => {
  const { isDarkMode } = useDarkMode();

  return (
    <DialogBase
      tabIndex={-1}
      fullScreen={true}
      {...actions}
      className={`${styles.DialogStyle} ${className}`}
      open={open}
    >
      {children}
    </DialogBase>
  );
};

export default Dialog;
