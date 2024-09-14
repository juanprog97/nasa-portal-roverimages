'use client';

import {
  DarkModeProvider,
  FavoritesImagesProvider,
  FiltersProvider,
  FullScreenFavoriteContext,
  FullScreenFavoriteProvider,
  FullScreenProvider,
} from '@/context';
import { Content, Navbar, SectionOptions } from '@/components/templates';
import dynamic from 'next/dynamic';
import { AnimationMoveSwipe } from '@/components/atoms';

const ContentComponent = dynamic(
  () => import('@/components/templates/Content'),
  {
    ssr: false,
  }
);

const Home = () => {
  return (
    <FullScreenProvider>
      <FullScreenFavoriteProvider>
        <DarkModeProvider>
          <FiltersProvider>
            <FavoritesImagesProvider>
              <Navbar />
              <ContentComponent />
              <SectionOptions />
            </FavoritesImagesProvider>
          </FiltersProvider>
        </DarkModeProvider>
      </FullScreenFavoriteProvider>
    </FullScreenProvider>
  );
};

export default Home;
