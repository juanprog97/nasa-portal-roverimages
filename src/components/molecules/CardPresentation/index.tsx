import {
  Button,
  ButtonCircle,
  CardBase,
  Icon,
  PhotoImage,
} from '@/components/atoms';
import { CardDataPresentation } from '@/utils';
import React, { FC, useState } from 'react';
import styles from './CardPresentation.module.scss';
import { colors } from '@/utils';

type CardPresentationProps = {
  data: CardDataPresentation;
  onChangeLike: (id: string, isLike: boolean) => void;
};

const CardPresentation: FC<CardPresentationProps> = ({
  data,
  onChangeLike = (id, isLike: boolean) => {},
}: CardPresentationProps) => {
  const [isFavorite, setStateFavorite] = useState<boolean>(false);

  const handleClickLike = () => {
    if (!!onChangeLike) {
      onChangeLike(data.id, isFavorite);
    }
    setStateFavorite((value) => !value);
  };

  return (
    <CardBase className={styles.CardStyle}>
      <PhotoImage src={data.imgsrc} alt={'sadas'} />
      <div className={styles.detailInfo}>
        <p>
          <b>📅☀️Solar Date:</b> 11000
        </p>
        <p>
          <b>📅🌎Earth Date:</b> 12-20-2024
        </p>
        <p>
          <b>🤖Rover:</b>Curiosity
        </p>
        <p>
          <b>Status: </b>✅Active 🔴Disable
        </p>
      </div>
      <div className={styles.InteractionButton}>
        <Button className='btn btn-primary font-semibold'>FullScreen</Button>
        <ButtonCircle className={styles.ButtonCircle} onClick={handleClickLike}>
          <Icon
            icon={isFavorite ? 'favorite' : 'favorite_outlined'}
            sx={{
              fontSize: 40,
              color: colors.redcolornasa,
            }}
          />
        </ButtonCircle>
      </div>
    </CardBase>
  );
};

export default CardPresentation;
