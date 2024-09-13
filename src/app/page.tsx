'use client';

import {
  DarkModeProvider,
  FavoritesImagesProvider,
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
          <FavoritesImagesProvider>
            <Navbar />
            <ContentComponent />
            <SectionOptions />
          </FavoritesImagesProvider>
        </FiltersProvider>
      </DarkModeProvider>
    </FullScreenProvider>
  );
};

export default Home;
