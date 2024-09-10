'use client';
import { RadioGroup } from '@mui/material';
import { ChangeEvent, FC } from 'react';
import style from './GroupButtonOptions.module.scss';
import { uuidv4 } from '@/utils';

const SkeletonRadioButton = () => {
  return <div className={style.SkeletonRadioButton} />;
};

type GroupButtonOptionsProps = {
  children?: any;
  loading?: boolean;
  className?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
};

const GroupButtonOptions: FC<GroupButtonOptionsProps> = ({
  children,
  loading,
  className,
  value = '',
  onChange = () => {},
}) => {
  return (
    <>
      <RadioGroup
        onChange={onChange}
        value={value}
        className={`${style.GroupListButtons} ${className}`}
      >
        {loading
          ? Array(4)
              .fill({})
              .map((_) => <SkeletonRadioButton key={uuidv4()} />)
          : children}
      </RadioGroup>
    </>
  );
};

export default GroupButtonOptions;
