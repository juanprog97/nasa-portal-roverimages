'use client';
import { Button } from '@/components/atoms/Button';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Button styles='font-semibold ' color='blue'>
        Hola
      </Button>
    </main>
  );
}
