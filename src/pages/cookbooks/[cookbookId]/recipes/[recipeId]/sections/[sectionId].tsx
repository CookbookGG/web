import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useStore } from '../../../../../../store/store';
import { CookbookSection } from '../../../../../../components/Cookbook/CookbookGuide/CookbookSection/CookbookSection';

const init = async (sectionId: string) => {
  if (!sectionId) return;

  useStore.getState().setSectionFromGuidesStore(sectionId);
  const section = useStore.getState().section;

  if (section) {
    // TODO: This state is not set before the component is rendered, but for some reason it is not re-rendered when the state is set. IDK why
    useStore.setState({ section });
  }
};

export const Section: React.FC = () => {
  const router = useRouter();
  const { sectionId } = router.query;
  const { section } = useStore(state => state);

  useEffect(() => {
    init(sectionId?.toString());
  }, [sectionId]);

  if (section) {
    return (
      <>
        <CookbookSection section={section} />
      </>
    );
  }

  return <>Loading..</>;
};

export default Section;
