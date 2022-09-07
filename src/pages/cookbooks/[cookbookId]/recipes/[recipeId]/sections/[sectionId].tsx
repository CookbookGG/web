import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useStore } from '../../../../../../store/store';
import { CookbookSection } from '../../../../../../components/Cookbook/CookbookGuide/CookbookSection/CookbookSection';
import { SectionModel } from '../../../../../../models/Section';

const init = async (sectionId: string | string[]) => {
  if (sectionId != null) {
    // TODO: Should probably get the specific section from a section array, not the guides

    useStore.getState().guides.forEach(guide => {
      const section = guide.sections.filter(
        (section: SectionModel) =>
          encodeURIComponent(section.title) == sectionId
      )[0];

      if (section) {
        // TODO: This state is not set before the component is rendered, but for some reason it is not re-rendered when the state is set. IDK why
        useStore.setState({ section });
      }
    });
  }
};

export const Section: React.FC = () => {
  const router = useRouter();
  const { sectionId } = router.query;
  const { section } = useStore(state => state);

  useEffect(() => {
    init(sectionId);
  }, [sectionId]);

  if (section) {
    return (
      <>
        <CookbookSection section={section} />
      </>
    );
  } else {
    return <>Loading..</>;
  }
};

export default Section;
