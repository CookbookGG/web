import create from 'zustand';
import { ROUTES } from '../constants/constants';
import { Cookbook } from '../models/Cookbook';
import { Guide } from '../models/Guide';
import { SectionModel } from '../models/Section';
import { User } from '../models/User';
import HttpService from '../utils/HttpService';

export interface IStore {
  user: User | null;
  cookbook: Cookbook | null;
  cookbooks: Cookbook[];
  guides: Guide[];
  section: SectionModel;
  swipeMargin: number;
  swipeLeft: () => void;
  swipeRight: () => void;
  updateGuides: (guides: Guide[]) => void;
  setGuidesFromCookbookAPI: (cookbook: Cookbook) => void;
  setSectionFromGuidesStore: (sectionId: string) => void;
}

export const useStore = create<IStore>((set, get) => {
  const store: IStore = {
    user: null,
    cookbook: null,
    cookbooks: [],
    guides: [],
    section: null,
    swipeMargin: 0,
    swipeRight: () => set(() => ({ swipeMargin: 600 })),
    swipeLeft: () => set({ swipeMargin: 0 }),
    updateGuides: guides => {
      set(() => ({ guides }));
    },
    setGuidesFromCookbookAPI: async cookbook => {
      // Might be worth separating stores we use the API? idk
      const response = await HttpService.get(ROUTES.GUIDES(cookbook._id));

      set({ guides: await response });
    },

    setSectionFromGuidesStore: sectionId => {
      const guideSections = get().guides.flatMap(guide => guide.sections);
      const decodedSectionId = decodeURIComponent(sectionId); // Should this be done here?
      const section = guideSections.find(
        guideSection => guideSection.title == decodedSectionId
      );

      set(() => ({ section }));
    },
  };

  return store;
});
