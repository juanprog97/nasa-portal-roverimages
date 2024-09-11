'use client';

import {
  DarkModeProvider,
  FiltersProvider,
  FullScreenProvider,
} from '@/context';
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
    <FullScreenProvider>
      <DarkModeProvider>
        <FiltersProvider>
          <Navbar />
          <ContentComponent />
          <SectionOptions />
        </FiltersProvider>
      </DarkModeProvider>
    </FullScreenProvider>
  );
};

export default Home;
