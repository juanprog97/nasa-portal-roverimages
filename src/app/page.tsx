'use client';

import { DarkModeProvider, FiltersProvider } from '@/context';
import { Content, Navbar, SectionOptions } from '@/components/templates';
import dynamic from 'next/dynamic';

const ContentComponent = dynamic(
  () => import('@/components/templates/Content'),
  {
    ssr: false,
  }
);

const Home = () => {
  return (
    <DarkModeProvider>
      <FiltersProvider>
        <Navbar />
        <ContentComponent />
        <SectionOptions />
      </FiltersProvider>
    </DarkModeProvider>
  );
};

export default Home;
