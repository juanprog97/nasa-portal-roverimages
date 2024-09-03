'use client';
import {
  Button,
  CardNasa,
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
} from '@/components/atoms';
import { useDarkMode } from '@/hooks';
import { useState } from 'react';
import { DarkModeProvider } from '@/context';
import { ContainerFloat, Navbar } from '@/components/organisms';
import { ButtonFloating } from '@/components/molecules';
import { RadioGroup } from '@mui/material';

export default function Home() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [value, setValue] = useState<string>('option1');

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };
  return (
    <main className='flex min-h-screen flex-col items-center justify-between bg-white p-24 dark:bg-black-300'>
      <DarkModeProvider>
        <Navbar />
        <Button styles='font-semibold p-10' color='blue'>
          Hola
        </Button>
        <RadioGroup value={value}>
          <ButtonOptions
            selectedValue={value}
            value='option3'
            label='erd1'
            onChange={handleChange}
          />
          <ButtonOptions
            value='option2'
            label='erd2'
            selectedValue={value}
            onChange={handleChange}
          />

          <ButtonOptions
            value='option1'
            label='erd3'
            selectedValue={value}
            onChange={handleChange}
          />
        </RadioGroup>
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
          styles='font-semibold p-10'
          color='blue'
        >
          Modal
        </Button>
        <Button
          onClick={() => setOpenModal((openModal) => !openModal)}
          styles='font-semibold p-10'
          color='blue'
        >
          Modal
        </Button>
        <PhotoImage src='https://static01.nyt.com/images/2023/09/09/multimedia/09isaacson-book-2-bpcw-esp1/09isaacson-book-2-bpcw-articleLarge.jpg?quality=75&auto=webp&disable=upscale' />
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
        <Drawer open={false}>hola</Drawer>
        <Popover>
          <ButtonPopover>holaa</ButtonPopover>
          <PopoverContent>erda</PopoverContent>
        </Popover>
      </DarkModeProvider>
    </main>
  );
}
