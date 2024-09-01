'use client';
import { Button, PhotosNasa } from '@/components/atoms';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Button styles='font-semibold ' color='blue'>
        Hola
      </Button>
      <PhotosNasa src='https://static01.nyt.com/images/2023/09/09/multimedia/09isaacson-book-2-bpcw-esp1/09isaacson-book-2-bpcw-articleLarge.jpg?quality=75&auto=webp&disable=upscale' />
    </main>
  );
}
