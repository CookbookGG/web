import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useStore } from '../../../../../../store/store';
import { CookbookSection } from '../../../../../../components/Cookbook/CookbookGuide/CookbookSection/CookbookSection';

const init = async (sectionId: string) => {
  useStore.getState().setSectionFromGuidesStore(sectionId);
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
