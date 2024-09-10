'use client';
export const createLocalStorageProvider = (storageKey: string) => {
  const getStorageKey = (key: string) => `${storageKey}:${key}`;

  return {
    get: (key: string) => {
      if (typeof window !== 'undefined') {
        const item = localStorage.getItem(getStorageKey(key));
        return item ? JSON.parse(item) : undefined;
      }
      return undefined;
    },
    set: (key: string, value: any) => {
      localStorage.setItem(getStorageKey(key), JSON.stringify(value));
    },
    delete: (key: string) => {
      localStorage.removeItem(getStorageKey(key));
    },
    clear: () => {
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith(storageKey)) {
          localStorage.removeItem(key);
        }
      });
    },
    keys: function* () {
      for (const key of Object.keys(localStorage)) {
        if (key.startsWith(storageKey)) {
          yield key.substring(storageKey.length + 1);
        }
      }
    },
  };
};
