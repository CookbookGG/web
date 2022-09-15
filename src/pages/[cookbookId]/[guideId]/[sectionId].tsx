import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { CookbookSection } from '../../../components/Cookbook/CookbookGuide/CookbookSection/CookbookSection';
import { Section } from '../../../models/Section';
import { useStore } from '../../../store/store';

export const SectionComponent: React.FC = () => {
  const router = useRouter();
  const { sectionId, guideId } = router.query;
  const { section } = useStore(state => state);
  const [prevSection, setPrevSection] = useState<Section>();
  const [nextSection, setNextSection] = useState<Section>();

  useEffect(() => {
    const init = async (sectionId: string, guideId: string) => {
      useStore.getState().setSectionFromGuidesStore(sectionId);
      useStore.getState().setGuideFromGuideId(guideId);

      const guide = useStore.getState().guide;
      const section = useStore.getState().section;
      // TODO: This does not work on reload
      const sectionIndex = guide.sections.findIndex(
        aSection => aSection.title === section.title
      );

      setPrevSection(guide.sections[sectionIndex - 1]);
      setNextSection(guide.sections[sectionIndex + 1]);
    };
    // The ?.toString() is really annoying, can we avoid that somehow?
    init(sectionId?.toString(), guideId?.toString());
  }, [sectionId]);

  if (section) {
    return (
      <>
        <CookbookSection
          section={section}
          prevSection={prevSection}
          nextSection={nextSection}
        />
      </>
    );
  }

  return <>Loading..</>;
};

export default SectionComponent;
