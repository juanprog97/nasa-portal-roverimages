'use client';
import {
  Button,
  SwitchBase,
  Icon,
  ButtonArrow,
  ButtonCircle,
  Dialog,
  Drawer,
  Popover,
  ButtonPopover,
  PopoverContent,
  PhotoImage,
  ButtonOptions,
  CardBase,
} from '@/components/atoms';
import { consoleMessage } from '@/utils';
import { useDarkMode } from '@/hooks';
import { useEffect, useState } from 'react';
import { DarkModeProvider } from '@/context';
import {
  ContainerFloat,
  ListCardPhotosInfinite,
  Navbar,
} from '@/components/organisms';
import { ButtonFloating, CardPresentation } from '@/components/molecules';
import { CardDataPresentation, FavoriteSearch, uuidv4 } from '@/utils';
import ListFavoritesSearch from '@/components/organisms/ListFavoritesSearch';

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
  const dataCard: CardDataPresentation = {
    id: uuidv4().toString(),
    imgsrc:
      'http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631190305216E04_DXXX.jpg',
    earthDate: '2015-05-30',
    roverName: 'Curiosity',
    solDate: 100,
    statusRover: true,
  };
  const handleChange = (newValue: string) => {
    console.log(newValue);
  };
  return (
    <main className='flex min-h-screen flex-col items-center justify-between bg-white p-24 dark:bg-black-300'>
      <DarkModeProvider>
        <Navbar />
        <Button className='p-10 font-semibold' color='blue'>
          Hola
        </Button>
        <ListCardPhotosInfinite />
        <ListFavoritesSearch
          listOptions={data}
          onChange={handleChange}
          valueDefault='ep1'
        />
        <ContainerFloat
          styles='flex flex-col gap-y-[2rem]'
          vertical='bottom'
          horizontal='left'
        >
          <ButtonFloating type='filters' arialLabel='filters-action' />
          <ButtonFloating type='filters' arialLabel='filters-action' />
          <ButtonFloating type='filters' arialLabel='filters-action' />
        </ContainerFloat>
        <Button
          onClick={() => setOpenModal((openModal) => !openModal)}
          className='p-10 font-semibold'
          color='blue'
        >
          Modal
        </Button>
        <Button
          onClick={() => setOpenModal((openModal) => !openModal)}
          className='p-10 font-semibold'
          color='blue'
        >
          Modal
        </Button>
        <CardPresentation data={dataCard} />
        <SwitchBase />
        <ButtonArrow direction='left' />
        <ButtonCircle>
          <Icon icon='close' fontSize='medium' />
        </ButtonCircle>
        <Dialog open={openModal}>Holaa</Dialog>
        <Drawer open={false}>hola</Drawer>
        <Popover>
          <ButtonPopover>holaa</ButtonPopover>
          <PopoverContent>erda</PopoverContent>
        </Popover>
      </DarkModeProvider>
    </main>
  );
}
