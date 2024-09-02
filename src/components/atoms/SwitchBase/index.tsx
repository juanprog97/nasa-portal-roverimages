'use client';
import Switch from '@mui/material/Switch';
import { SxProps, Theme, styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

type AllowedType = 'toogle-dark' | 'base';

type SwitchBaseProps = {
  handleToggle?: () => void;
  type?: AllowedType;
  sx?: SxProps<Theme>;
};

const SwitchBase: React.FC<SwitchBaseProps> = ({
  handleToggle = () => {},
  sx = (theme) => ({}),
}: SwitchBaseProps) => {
  return <Switch sx={sx} onChange={handleToggle} />;
};

export default SwitchBase;
