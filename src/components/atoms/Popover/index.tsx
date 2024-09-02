'use client';
import { Button, Popover as PopoverBase, SxProps } from '@mui/material';
import { FC, createContext, useContext, useState } from 'react';
import PopupState, {
  InjectedProps,
  bindTrigger,
  bindPopover,
} from 'material-ui-popup-state';
import { uuidv4 } from '@/utils';

type PopoverProps = {
  children?: any;
  open?: boolean;
};

type PopoverStateProps = {
  Consumer?: any;
  popupId?: string;
  popupState?: InjectedProps;
};

const PopoverBaseContext = createContext<PopoverStateProps>({});

const usePopoverBase = () => useContext(PopoverBaseContext);

export const Popover: FC<PopoverProps> = ({ children }: PopoverProps) => {
  const uuid = uuidv4();
  return (
    <PopupState variant='popover' popupId='demo-popup-popover'>
      {(popupState) => (
        <PopoverBaseContext.Provider
          value={{ popupId: uuid, popupState: popupState }}
        >
          <div>{children}</div>
        </PopoverBaseContext.Provider>
      )}
    </PopupState>
  );
};

type PopoverButtonProps = {
  children?: any;
  sx?: SxProps;
};

export const ButtonPopover: FC<PopoverButtonProps> = ({
  children,
}: PopoverButtonProps) => {
  const { popupState } = usePopoverBase();
  if (popupState === undefined)
    throw new Error(
      'You should wrap the ButtonPopover component with Popover provider'
    );
  return (
    <>
      <Button variant='contained' {...bindTrigger(popupState)}>
        {children}
      </Button>
    </>
  );
};

type PopoverContentProps = {
  children?: any;
};

export const PopoverContent: FC<PopoverContentProps> = ({
  children,
}: PopoverContentProps) => {
  const { popupState } = usePopoverBase();
  if (popupState === undefined)
    throw new Error(
      'You should wrap the ButtonPopover component with Popover provider'
    );
  return (
    <PopoverBase
      {...bindPopover(popupState)}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      {children}
    </PopoverBase>
  );
};
