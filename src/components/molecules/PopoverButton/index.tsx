'use client';

import { Button } from '@/atoms';
import { Popover } from '@mui/material';
import React, { FC, ReactNode, useState } from 'react';
type PopoverButtonProps = {
  children: any;
  adapterStructure?: ReactNode;
  className?: string;
};

const PopoverButton: FC<PopoverButtonProps> = ({
  children,
  adapterStructure,
  className,
}: PopoverButtonProps) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <>
      <Button className={className} onClick={handleClick} color='red'>
        {children}
      </Button>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {adapterStructure}
      </Popover>
    </>
  );
};

export default PopoverButton;
