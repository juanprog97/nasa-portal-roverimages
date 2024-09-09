import { ContainerFloat } from '@/components/organisms';
import styles from './DrawerFilters.module.scss';
import { ButtonFloating } from '@/components/molecules';

const SectionOptions = () => {
  return (
    <>
      <ContainerFloat styles='flex flex-col gap-4'>
        <ButtonFloating type='filters' arialLabel='Filters' />
        <ButtonFloating type='favorites' arialLabel='Favorites' />
      </ContainerFloat>
    </>
  );
};

export default SectionOptions;
