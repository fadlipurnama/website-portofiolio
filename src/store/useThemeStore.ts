// src/store/useThemeStore.ts
import { create } from "zustand";

interface ThemeState {
  theme: string;
  setTheme: (theme: string) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: "system", // default awal
  setTheme: (theme) => set({ theme }),
}));