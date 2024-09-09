'use client';
import {
  CardFilter,
  ButtonRadio,
  RangeInput,
  DatePicker,
} from '@/components/atoms';
import { consoleMessage } from '@/utils';
import { useEffect, useState } from 'react';
import { DarkModeProvider, FiltersProvider } from '@/context';
import {
  ContainerFloat,
  Filters,
  ListCardPhotosInfinite,
} from '@/components/organisms';
import {
  ButtonFloating,
  CardPresentation,
  FilterCardDropdown,
  GroupButtonOptions,
} from '@/components/molecules';
import { FavoriteSearch, uuidv4 } from '@/utils';
import ListFavoritesSearch from '@/components/organisms/ListFavoritesSearch';
import { Content, Navbar, SectionOptions } from '@/components/templates';
import { Radio } from '@mui/material';
import InputNumber from '@/components/atoms/InputNumber/indext';
import Dropdown from '@/components/atoms/Dropdown';
import {
  FilterCardSelectOption,
  FilterCardDateNumberRange,
} from '@/components/molecules/';

export function Home() {
  return (
    <FiltersProvider>
      <DarkModeProvider>
        <Navbar />
        {/* <Filters /> */}
        <Content />

        <SectionOptions />
      </DarkModeProvider>
    </FiltersProvider>
  );
}

export default Home;

{
  /* <Main /> */
}
{
  /* <Button className='p-10 font-semibold' color='blue'>
          Hola
        </Button> */
}
{
  /* <ListFavoritesSearch
          listOptions={data}
          onChange={handleChange}
          valueDefault='ep1'
        /> */
}
{
  /* <ContainerFloat
          styles='flex flex-col gap-y-[2rem]'
          vertical='bottom'
          horizontal='left'
        >
          <ButtonFloating type='filters' arialLabel='filters-action' />
          <ButtonFloating type='filters' arialLabel='filters-action' />
          <ButtonFloating type='filters' arialLabel='filters-action' />
        </ContainerFloat> */
}
{
  /* <Button
          onClick={() => setOpenModal((openModal) => !openModal)}
          className='p-10 font-semibold'
          color='blue'
        >
          Modal
        </Button> */
}
{
  /* <Button
          onClick={() => setOpenModal((openModal) => !openModal)}
          className='p-10 font-semibold'
          color='blue'
        >
          Modal
        </Button> */
}
{
  /* <ButtonArrow direction='left' /> */
}
{
  /* <Dialog open={openModal}>Holaa</Dialog>
        <Drawer open={false}>hola</Drawer>
        <Popover>
          <ButtonPopover>holaa</ButtonPopover>
          <PopoverContent>erda</PopoverContent>
        </Popover> */
}
