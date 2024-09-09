import { Fab, Icon } from '@/components/atoms';
import { FC } from 'react';
import { colors } from '@/utils';
import styles from './FabStyle.module.scss';

type AllowedTypeButtonFloating = 'favorites' | 'filters';

type ButtonFloating = {
  children?: any;
  type: AllowedTypeButtonFloating;
  onClick?: () => void;

  arialLabel: string;
};

const ButtonFloating: FC<ButtonFloating> = ({
  type = 'filters',
  onClick = () => {},
  arialLabel = '',
}: ButtonFloating) => {
  const filterButtonFab = () => ({
    backgroundColor: colors.blue[100],
    color: 'white',
    width: 'auto',
    borderRadius: '25px  25px',
    padding: '1.5em',
    '&:hover': {
      backgroundColor: colors.blue[300],
    },
  });

  const FavoriteButtonFab = () => ({
    backgroundColor: colors.red[200],
    color: 'white',
    width: 'auto',
    borderRadius: '25px  25px',
    padding: '1.5em',
    '&:hover': {
      backgroundColor: colors.red[300],
    },
  });
  if (type == 'filters') {
    return (
      <Fab
        sx={filterButtonFab}
        className={styles.FabStyle}
        ariaLabel={arialLabel}
        onClick={onClick}
      >
        <Icon icon='filter_alt' />
        <p className='pl-2 text-xl font-medium normal-case'>Filters</p>
      </Fab>
    );
  }
  if (type == 'favorites') {
    return (
      <Fab
        sx={FavoriteButtonFab}
        className={styles.FabStyle}
        ariaLabel={arialLabel}
        onClick={onClick}
      >
        <Icon icon='favorite' />
        <p className='pl-2 text-xl font-medium normal-case'>Favorites</p>
      </Fab>
    );
  }
};

export default ButtonFloating;
