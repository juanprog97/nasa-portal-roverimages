import { Fab as FabBase, SxProps, Theme } from '@mui/material';
import { FC } from 'react';

type FabProps = {
  children?: any;
  sx?: SxProps<Theme>;
  ariaLabel?: string;
  onClick: () => void;
  className?: string;
};

const Fab: FC<FabProps> = ({
  onClick = () => {},
  ariaLabel = 'none',
  children,
  className,
  sx,
}: FabProps) => {
  return (
    <FabBase
      aria-label={ariaLabel}
      className={className}
      onClick={onClick}
      sx={sx}
    >
      {children}
    </FabBase>
  );
};

export default Fab;
