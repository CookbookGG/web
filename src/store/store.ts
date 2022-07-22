import create from 'zustand';

export interface IStore {
  swipeMargin: number;
  swipeLeft: () => void;
  swipeRight: () => void;
}

export const useStore = create(set => {
  const store: IStore = {
    swipeMargin: 0,
    swipeRight: () => set(() => ({ swipeMargin: 600 })),
    swipeLeft: () => set({ swipeMargin: 0 }),
  };

  return store;
});
