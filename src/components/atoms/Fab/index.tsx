import { Fab as FabBase, SxProps, Theme } from '@mui/material';
import { FC } from 'react';

type FabProps = {
  children?: any;
  sx?: SxProps<Theme>;
  ariaLabel?: string;
  onClick: () => void;
};

const Fab: FC<FabProps> = ({
  onClick = () => {},
  ariaLabel = 'none',
  children,
  sx,
}: FabProps) => {
  return (
    <FabBase aria-label={ariaLabel} onClick={onClick} sx={sx}>
      {children}
    </FabBase>
  );
};

export default Fab;
