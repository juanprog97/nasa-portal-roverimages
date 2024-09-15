import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ListCardPhotosInfinite } from '@/organisms';
import {
  usePhotosScrollInfinite,
  useFullScreen,
  useLoadFavoriteImages,
} from '@/hooks';
import { SWRProvider } from '@/context';

jest.mock('@/hooks', () => ({
  usePhotosScrollInfinite: jest.fn(),
  useFullScreen: jest.fn(),
  useLoadFavoriteImages: jest.fn(),
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

  it('muestra un spinner de carga cuando isLoading es true', () => {
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

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('muestra un spinner de error cuando ocurre un error', () => {
    (usePhotosScrollInfinite as jest.Mock).mockReturnValueOnce({
      photos: [],
      error: new Error('Error al cargar fotos'), // Simula un error
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

    // Verificar que el spinner de error se muestra
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });

  it('renderiza una lista de fotos correctamente', () => {
    const mockPhotos = [
      { id: '1', title: 'Foto 1' },
      { id: '2', title: 'Foto 2' },
    ];

    (usePhotosScrollInfinite as jest.Mock).mockReturnValueOnce({
      photos: mockPhotos, // Simula que hay fotos disponibles
      error: null,
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

    // Verificar que las fotos se renderizan
    mockPhotos.forEach((photo) => {
      expect(screen.getByText(photo.title)).toBeInTheDocument();
    });
  });
});
