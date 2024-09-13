'use client';
import { ContainerFloat, Filters } from '@/components/organisms';
import styles from './SectionOptions.module.scss';
import { ButtonFloating } from '@/components/molecules';
import { Drawer } from '@/components/atoms';
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
