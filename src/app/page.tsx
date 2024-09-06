'use client';
import {
  Button,
  ButtonArrow,
  Dialog,
  Drawer,
  Popover,
  ButtonPopover,
  PopoverContent,
} from '@/components/atoms';
import { consoleMessage } from '@/utils';
import { useEffect, useState } from 'react';
import { DarkModeProvider } from '@/context';
import {
  ContainerFloat,
  ListCardPhotosInfinite,
  Navbar,
} from '@/components/organisms';
import { ButtonFloating, CardPresentation } from '@/components/molecules';
import { FavoriteSearch, uuidv4 } from '@/utils';
import ListFavoritesSearch from '@/components/organisms/ListFavoritesSearch';
import { Main } from '@/components/templates';

export default function Home() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const data: FavoriteSearch[] = [
    { id: uuidv4().toString(), value: 'ep1', label: 'test1' },
    { id: uuidv4().toString(), value: 'ep2', label: 'test2' },
    { id: uuidv4().toString(), value: 'ep3', label: 'test3' },
    { id: uuidv4().toString(), value: 'ep4', label: 'test4' },
  ];
  useEffect(() => {
    consoleMessage();
  }, []);

  const handleChange = (newValue: string) => {
    console.log(newValue);
  };
  return (
    <>
      <DarkModeProvider>
        <Main />
        {/* <Button className='p-10 font-semibold' color='blue'>
          Hola
        </Button> */}
        {/* <ListFavoritesSearch
          listOptions={data}
          onChange={handleChange}
          valueDefault='ep1'
        /> */}
        {/* <ContainerFloat
          styles='flex flex-col gap-y-[2rem]'
          vertical='bottom'
          horizontal='left'
        >
          <ButtonFloating type='filters' arialLabel='filters-action' />
          <ButtonFloating type='filters' arialLabel='filters-action' />
          <ButtonFloating type='filters' arialLabel='filters-action' />
        </ContainerFloat> */}
        {/* <Button
          onClick={() => setOpenModal((openModal) => !openModal)}
          className='p-10 font-semibold'
          color='blue'
        >
          Modal
        </Button> */}
        {/* <Button
          onClick={() => setOpenModal((openModal) => !openModal)}
          className='p-10 font-semibold'
          color='blue'
        >
          Modal
        </Button> */}
        {/* <ButtonArrow direction='left' /> */}
        {/* <Dialog open={openModal}>Holaa</Dialog>
        <Drawer open={false}>hola</Drawer>
        <Popover>
          <ButtonPopover>holaa</ButtonPopover>
          <PopoverContent>erda</PopoverContent>
        </Popover> */}
      </DarkModeProvider>
    </>
  );
}
