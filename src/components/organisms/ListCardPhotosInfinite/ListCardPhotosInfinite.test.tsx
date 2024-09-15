import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ListCardPhotosInfinite } from '@/organisms';
import {
  usePhotosScrollInfinite,
  useFullScreen,
  useLoadFavoriteImages,
} from '@/hooks';
import { SWRProvider } from '@/context';
import { CardDataPresentation } from '@/models';
import React from 'react';

jest.mock('@/hooks', () => ({
  usePhotosScrollInfinite: jest.fn(),
  useFullScreen: jest.fn(),
  useLoadFavoriteImages: jest.fn(),
  useImageLoaded: jest.fn(),
}));

describe('ListCardPhotosInfinite', () => {
  beforeEach(() => {
    (usePhotosScrollInfinite as jest.Mock).mockReturnValue({
      photos: [],
      error: null,
      loadMore: jest.fn(),
      isReachingEnd: false,
      isLoading: false,
      isValidating: false,
    });
    (useFullScreen as jest.Mock).mockReturnValue({
      openImage: jest.fn(),
      isOpen: false,
      index: 0,
      nextImage: jest.fn(),
      backImage: jest.fn(),
      toogleFullScreen: jest.fn(),
    });
    (useLoadFavoriteImages as jest.Mock).mockReturnValue({
      addFavorite: jest.fn(),
      deleteFavorite: jest.fn(),
      isPhotoLike: jest.fn(() => false),
    });
  });

  it('Show Loading Screen', () => {
    (usePhotosScrollInfinite as jest.Mock).mockReturnValueOnce({
      photos: [],
      error: null,
      isLoading: true,
      loadMore: jest.fn(),
      isReachingEnd: false,
      isValidating: false,
    });

    render(
      <SWRProvider keyItem='content'>
        <ListCardPhotosInfinite />
      </SWRProvider>
    );

    expect(screen.getByTestId('loading-screen')).toBeInTheDocument();
  });

  it('Show Loading Screen', () => {
    (usePhotosScrollInfinite as jest.Mock).mockReturnValueOnce({
      photos: [],
      error: new Error(''),
      isLoading: false,
      loadMore: jest.fn(),
      isReachingEnd: false,
      isValidating: false,
    });

    render(
      <SWRProvider keyItem='content'>
        <ListCardPhotosInfinite />
      </SWRProvider>
    );

    expect(screen.getByTestId('error-screen')).toBeInTheDocument();
  });

  it('render photo list ', async () => {
    const mockPhotos: CardDataPresentation[] = [
      {
        id: '2',
        imgsrc: 'Foto 1',
        earthDate: '15/05/2020',
        roverName: 'Curiosity',
        solDate: '50',
        camera: 'Camera',
      },
      {
        id: '1',
        imgsrc: 'Photo1',
        earthDate: '15/08/2020',
        roverName: 'Curiosity',
        solDate: '60',
        camera: 'Camera',
      },
    ];

    (usePhotosScrollInfinite as jest.Mock).mockReturnValueOnce({
      photos: mockPhotos,
      error: null,
      isLoading: false,
      loadMore: jest.fn(),
      isReachingEnd: false,
      isValidating: false,
    });
    (useFullScreen as jest.Mock).mockReturnValueOnce({
      openImage: jest.fn(),
    });

    (useLoadFavoriteImages as jest.Mock).mockReturnValueOnce({
      addFavorite: jest.fn(),
      deleteFavorite: jest.fn(),
      isPhotoLike: jest.fn().mockReturnValue(false),
    });

    render(
      <SWRProvider keyItem='content'>
        <ListCardPhotosInfinite />
      </SWRProvider>
    );
    const containerListCard = screen.getByRole('card-container-list');
    expect(containerListCard.children).toHaveLength(2);
  });
});
