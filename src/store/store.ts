import create from 'zustand';
import { ROUTES } from '../constants/constants';
import { Cookbook } from '../models/Cookbook';
import { Guide } from '../models/Guide';
import { Section } from '../models/Section';
import { User } from '../models/User';
import HttpService from '../utils/HttpService';

export interface IStore {
  user: User | null;
  cookbook: Cookbook | null;
  cookbooks: Cookbook[];
  guides: Guide[];
  guide: Guide;
  section: Section;
  swipeMargin: number;
  swipeLeft: () => void;
  swipeRight: () => void;
  updateGuides: (guides: Guide[]) => void;
  getGuidesInCookbook: () => Guide[];
  setGuidesFromCookbookAPI: (cookbook: Cookbook) => void;
  setSectionFromGuidesStore: (sectionId: string) => void;
}

export const useStore = create<IStore>((set, get) => {
  const store: IStore = {
    user: null,
    cookbook: null,
    cookbooks: [],
    guides: [],
    guide: null,
    section: null,
    swipeMargin: 0,
    swipeRight: () => set(() => ({ swipeMargin: 600 })),
    swipeLeft: () => set({ swipeMargin: 0 }),
    updateGuides: guides => {
      set(() => ({ guides }));
    },

    setGuidesFromCookbookAPI: async cookbook => {
      const guides = await HttpService.get(ROUTES.GUIDES(cookbook._id));
      set({ guides });
    },

    getGuidesInCookbook: () => {
      const { cookbook, guides } = get();
      if (cookbook == null) return [];
      return guides.filter(guide => {
        return cookbook.guides.includes(guide._id);
      });
    },

    setSectionFromGuidesStore: sectionId => {
      const guideSections = get().guides.flatMap(guide => guide.sections);
      const decodedSectionId = decodeURIComponent(sectionId);
      const section = guideSections.find(
        guideSection => guideSection.title === decodedSectionId
      );

      set({ section });
    },
  };

  return store;
});
