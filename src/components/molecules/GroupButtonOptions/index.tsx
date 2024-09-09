'use client';
import { RadioGroup } from '@mui/material';
import { ChangeEvent, FC } from 'react';
import style from './GroupButtonOptions.module.scss';

const SkeletonRadioButton = () => {
  return <div className={style.SkeletonRadioButton} />;
};

type GroupButtonOptionsProps = {
  children?: any;
  loading?: boolean;
  className?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
};

const GroupButtonOptions: FC<GroupButtonOptionsProps> = ({
  children,
  loading,
  className,
  onChange = () => {},
}) => {
  return (
    <>
      <RadioGroup
        onChange={onChange}
        className={`${style.GroupListButtons} ${className}`}
      >
        {loading
          ? Array(4)
              .fill({})
              .map((_) => <SkeletonRadioButton />)
          : children}
      </RadioGroup>
    </>
  );
};

export default GroupButtonOptions;
