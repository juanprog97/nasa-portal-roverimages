'use client';

import { DarkModeProvider, FiltersProvider } from '@/context';
import { Content, Navbar, SectionOptions } from '@/components/templates';

const Home = () => {
  return (
    <DarkModeProvider>
      <FiltersProvider>
        <Navbar />

        <Content />
        <SectionOptions />
      </FiltersProvider>
    </DarkModeProvider>
  );
};

export default Home;
