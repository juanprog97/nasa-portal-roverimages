import { Content } from '@/components/templates';
import style from './Main.module.scss';
import { Navbar } from '@/components/templates';
import { DarkModeProvider } from '@/context';

const Main = () => {
  return (
    <main className={style.MainContainer}>
      <DarkModeProvider>
        <Navbar />
        <Content />
      </DarkModeProvider>
    </main>
  );
};

export default Main;
