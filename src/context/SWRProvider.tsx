'use client';
import React from 'react';
import { SWRConfig } from 'swr';
import { createLocalStorageProvider } from '@/utils'; // Importa tu proveedor

const SWRProvider: React.FC<{ keyItem: string; children: React.ReactNode }> = ({
  children,
  keyItem,
}) => {
  const provider = () => createLocalStorageProvider(keyItem);

  return (
    <SWRConfig value={{ provider, revalidateOnFocus: false }}>
      {children}
    </SWRConfig>
  );
};

export default SWRProvider;
