import 'react-swipeable';

declare module 'react-swipeable' {
  interface SwipeableHandlersOptions {
    preventDefaultTouchmoveEvent?: boolean;
  }
}
