'use client';
import Switch from '@mui/material/Switch';
import { SxProps, Theme, styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

type AllowedType = 'toogle-dark' | 'base';

type SwitchBaseProps = {
  handleToggle?: () => void;
  type?: AllowedType;
  sx?: SxProps<Theme>;
  checked?: boolean;
  className: string;
};

const SwitchBase: React.FC<SwitchBaseProps> = ({
  handleToggle = () => {},
  checked,
  className,
}: SwitchBaseProps) => {
  return (
    <Switch checked={checked} className={className} onChange={handleToggle} />
  );
};

export default SwitchBase;
