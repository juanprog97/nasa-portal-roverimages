'use client';
import { RadioGroup } from '@mui/material';
import { FC } from 'react';
import style from './GroupButtonOptions.module.scss';

const SkeletonRadioButton = () => {
  return <div className={style.SkeletonRadioButton} />;
};

type GroupButtonOptionsProps = {
  children?: any;
  loading?: boolean;
};

const GroupButtonOptions: FC<GroupButtonOptionsProps> = ({
  children,
  loading,
}) => {
  return (
    <>
      <RadioGroup className={style.GroupListButtons}>
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
