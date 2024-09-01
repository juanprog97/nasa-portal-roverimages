'use client';
import { Button, PhotoNasa, CardNasa } from '@/components/atoms';
import { useDarkMode } from '@/hooks';
import { useEffect } from 'react';

export default function Home() {
  const [state, toogleDarkMode] = useDarkMode();
  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Button
        onClick={() => toogleDarkMode()}
        styles='font-semibold p-10'
        color='blue'
      >
        Hola
      </Button>
      <PhotoNasa src='https://static01.nyt.com/images/2023/09/09/multimedia/09isaacson-book-2-bpcw-esp1/09isaacson-book-2-bpcw-articleLarge.jpg?quality=75&auto=webp&disable=upscale' />
      <CardNasa>asdasdas</CardNasa>
    </main>
  );
}
