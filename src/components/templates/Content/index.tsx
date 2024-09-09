'use client';
import { ListCardPhotosInfinite } from '@/components/organisms';
import { SWRProvider } from '@/context';

const Content = () => {
  return <ListCardPhotosInfinite />;
};

// const Content = (): JSX.Element => {
//   return (
//     <SWRProvider keyItem='content'>
//       <ContentWrapper />
//     </SWRProvider>
//   );
// };

export default Content;
