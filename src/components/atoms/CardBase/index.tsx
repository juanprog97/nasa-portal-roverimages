'use client';
import CardStyle from './CardBase.module.scss';

type CardProps = {
  className?: string;
  children?: any;
};

const CardBase: React.FC<CardProps> = ({
  className = '',
  children,
}: CardProps) => {
  return <div className={`${CardStyle.CardNasa} ${className}`}>{children}</div>;
};

export default CardBase;
