'use client';
import { ContainerFloat, Filters } from '@/organisms';
import styles from './SectionOptions.module.scss';
import { ButtonFloating } from '@/molecules';
import { Drawer } from '@/atoms';
import { useState } from 'react';
import { useFullScreenFavorite } from '@/hooks';

const SectionOptions = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const { toogleFullScreen } = useFullScreenFavorite();
  return (
    <>
      <ContainerFloat styles='flex flex-col gap-4'>
        <ButtonFloating
          onClick={() => setOpenDrawer(true)}
          type='filters'
          arialLabel='Filters'
        />
        <ButtonFloating
          onClick={toogleFullScreen}
          type='favorites'
          arialLabel='Favorites'
        />
      </ContainerFloat>
      <Drawer open={openDrawer} onClose={setOpenDrawer}>
        <Filters onClose={() => setOpenDrawer(false)} />
      </Drawer>
    </>
  );
};

export default SectionOptions;
