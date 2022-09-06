import create from 'zustand';
import { Cookbook } from '../models/Cookbook';
import { Guide } from '../models/Guide';
import { SectionModel } from '../models/Section';
import { User } from '../models/User';

export interface IStore {
  user: User | null;
  cookbook: Cookbook | null;
  cookbooks: Cookbook[];
  guides: Guide[];
  sections: SectionModel[];
  section: SectionModel;
  swipeMargin: number;
  swipeLeft: () => void;
  swipeRight: () => void;
  updateGuides: (guides: Guide[]) => void;
  updateSections: (sections: SectionModel[]) => void;
}

export const useStore = create<IStore>(set => {
  const store: IStore = {
    user: null,
    cookbook: null,
    cookbooks: [],
    guides: [],
    section: null,
    sections: [],
    swipeMargin: 0,
    swipeRight: () => set(() => ({ swipeMargin: 600 })),
    swipeLeft: () => set({ swipeMargin: 0 }),
    updateGuides: guides => {
      set(() => ({ guides }));
    },
    updateSections: sections => {
      set(() => ({ sections }));
    },
  };

  return store;
});
