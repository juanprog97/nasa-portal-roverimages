'use client';
import CardStyle from './CardNasa.module.scss';

type CardNasaProps = {
  styles?: string;
  children?: any;
};

const CardNasa: React.FC<CardNasaProps> = ({
  styles = '',
  children,
}: CardNasaProps) => {
  return <div className={`${CardStyle.CardNasa}${styles}`}>{children}</div>;
};

export default CardNasa;
