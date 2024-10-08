'use client';

import {
  DarkModeProvider,
  FavoritesImagesProvider,
  FiltersProvider,
  FullScreenFavoriteContext,
  FullScreenFavoriteProvider,
  FullScreenProvider,
  PhotoScrollInfiniteProvider,
} from '@/context';
import { Content, Navbar, SectionOptions } from '@/templates';
import dynamic from 'next/dynamic';
import { HotkeysProvider } from 'react-hotkeys-hook';
import { consoleMessage } from '../utils/console';

const ContentComponent = dynamic(() => import('@/templates/Content'), {
  ssr: false,
});
consoleMessage();
const Home = () => {
  return (
    <HotkeysProvider initiallyActiveScopes={['settings']}>
      <FiltersProvider>
        <PhotoScrollInfiniteProvider>
          <FullScreenProvider>
            <FullScreenFavoriteProvider>
              <DarkModeProvider>
                <FavoritesImagesProvider>
                  <Navbar />
                  <ContentComponent />
                  <SectionOptions />
                </FavoritesImagesProvider>
              </DarkModeProvider>
            </FullScreenFavoriteProvider>
          </FullScreenProvider>
        </PhotoScrollInfiniteProvider>
      </FiltersProvider>
    </HotkeysProvider>
  );
};

export default Home;
