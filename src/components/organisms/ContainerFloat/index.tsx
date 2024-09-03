import { FC } from 'react';
import styleContainer from './ContainerFloat.module.scss';
type AllowedPositionHorizontal = 'left' | 'center' | 'right';
type AllowedPositionVertical = 'top' | 'center' | 'bottom';

type ButtonContainerFloatProps = {
  vertical?: AllowedPositionVertical;
  horizontal?: AllowedPositionHorizontal;
  children: any;
  styles?: string;
};

const ContainerFloat: FC<ButtonContainerFloatProps> = ({
  vertical = 'bottom',
  horizontal = 'left',
  children,
  styles = '',
}: ButtonContainerFloatProps) => {
  return (
    <div
      data-vertical={vertical}
      data-horizontal={horizontal}
      className={`${styleContainer.ContainerFloat} ${styles}`}
    >
      {children}
    </div>
  );
};

export default ContainerFloat;
