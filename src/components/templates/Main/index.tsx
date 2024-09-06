import { ListCardPhotosInfinite, Navbar } from '@/components/organisms';
import style from './Main.module.scss';

const Main = () => {
  return (
    <main className={style.MainContainer}>
      <Navbar />
      <ListCardPhotosInfinite />
    </main>
  );
};

export default Main;
