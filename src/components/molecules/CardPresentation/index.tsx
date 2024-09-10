import {
  Button,
  ButtonCircle,
  CardBase,
  Icon,
  PhotoImage,
} from '@/components/atoms';
import { CardDataPresentation } from '@/models';
import React, { FC, MutableRefObject, useState } from 'react';
import styles from './CardPresentation.module.scss';
import { colors } from '@/utils';
import { RefObject } from 'react';

type CardPresentationProps = {
  data: CardDataPresentation;
  index?: number;
  onChangeLike?: (id: string, isLike: boolean) => void;
  onClickFullScreen?: (id: string) => void;
};

const CardPresentation: FC<CardPresentationProps> = ({
  data,
  onChangeLike = (id, isLike: boolean) => {},
  onClickFullScreen = () => {},
  index,
}: CardPresentationProps) => {
  const [isFavorite, setStateFavorite] = useState<boolean>(false);

  const handleClickLike = () => {
    if (!!onChangeLike) {
      onChangeLike(data.id, isFavorite);
    }
    setStateFavorite((value) => !value);
  };
  const handleClickFullScreen = () => {
    if (!!onClickFullScreen) {
      onClickFullScreen(data.id);
    }
  };

  return (
    <CardBase custom={index} className={styles.CardStyle}>
      <PhotoImage
        src={data.imgsrc}
        alt={`${data.solDate}-${data.camera}-${data.roverName}`}
      />
      <div className={styles.detailInfo}>
        <p>
          <b>📅☀️Solar Date:</b> {data.solDate}
        </p>
        <p>
          <b>📅🌎Earth Date:</b> {data.earthDate}
        </p>
        <p>
          <b>🤖Rover: </b>
          {data.roverName}
        </p>
        <p>
          <b>📷Camera: </b>
          {data.camera}
        </p>
      </div>

      <div className={styles.InteractionButton}>
        <Button
          className={styles.buttonFullScreen}
          onClick={handleClickFullScreen}
        >
          <Icon icon='open_in_full' />
        </Button>
        <ButtonCircle className={styles.ButtonCircle} onClick={handleClickLike}>
          <Icon
            icon={isFavorite ? 'favorite' : 'favorite_outlined'}
            className={styles.iconStyle}
          />
        </ButtonCircle>
      </div>
    </CardBase>
  );
};

export default CardPresentation;
