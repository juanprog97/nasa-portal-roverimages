'use client';
import { ContainerFloat, Filters } from '@/components/organisms';
import styles from './SectionOptions.module.scss';
import { ButtonFloating } from '@/components/molecules';
import { Drawer } from '@/components/atoms';
import { useState } from 'react';

const SectionOptions = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  return (
    <>
      <ContainerFloat styles='flex flex-col gap-4'>
        <ButtonFloating
          onClick={() => setOpenDrawer(true)}
          type='filters'
          arialLabel='Filters'
        />
        <ButtonFloating type='favorites' arialLabel='Favorites' />
      </ContainerFloat>
      <Drawer open={openDrawer} onClose={setOpenDrawer}>
        <Filters />
      </Drawer>
    </>
  );
};

export default SectionOptions;
