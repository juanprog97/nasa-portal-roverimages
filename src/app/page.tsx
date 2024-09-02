'use client';
import {
  Button,
  PhotoNasa,
  CardNasa,
  SwitchBase,
  Icon,
  ButtonArrow,
  ButtonCircle,
  Dialog,
  Drawer,
} from '@/components/atoms';
import { useDarkMode } from '@/hooks';
import { useEffect, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { DarkModeProvider } from '@/context';

export default function Home() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <DarkModeProvider children={undefined}>
        <Button styles='font-semibold p-10' color='blue'>
          Hola
        </Button>
        <Button
          onClick={() => setOpenModal((openModal) => !openModal)}
          styles='font-semibold p-10'
          color='blue'
        >
          Modal
        </Button>
        <PhotoNasa src='https://static01.nyt.com/images/2023/09/09/multimedia/09isaacson-book-2-bpcw-esp1/09isaacson-book-2-bpcw-articleLarge.jpg?quality=75&auto=webp&disable=upscale' />
        <CardNasa>
          asdasdas
          <Icon icon='home' fontSize='medium' />
        </CardNasa>
        <SwitchBase />
        <ButtonArrow direction='left' />
        <ButtonCircle>
          <Icon icon='close' fontSize='medium' />
        </ButtonCircle>
        <Dialog open={openModal}>Holaa</Dialog>
        <Drawer open={true}>hola</Drawer>
      </DarkModeProvider>
    </main>
  );
}
