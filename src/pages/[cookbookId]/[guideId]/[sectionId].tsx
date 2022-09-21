import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { CookbookSection } from '../../../components/Cookbook/CookbookGuide/CookbookSection/CookbookSection';
import { Sidebar } from '../../../components/Sidebar/Sidebar';
import { useStore } from '../../../store/store';

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
      <div className="sidebarLayout">
        <Sidebar />
        <CookbookSection section={section} />
      </div>
    );
  }

  return <>Loading..</>;
};

export default Section;
