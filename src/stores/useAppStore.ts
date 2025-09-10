import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
  language: 'ru' | 'en';
  setLanguage: (language: 'ru' | 'en') => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      language: 'ru',
      setLanguage: (language) => set({ language }),
    }),
    {
      name: 'app-storage',
    }
  )
);
