import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { CookbookSection } from '../../../components/Cookbook/CookbookGuide/CookbookSection/CookbookSection';
import { TwitchSidebar } from '../../../components/Sidebar/TwitchSidebar/TwitchSidebar';
import { useStore } from '../../../store/store';

const init = async (sectionId: string) => {
  useStore.getState().setSectionFromGuidesStore(sectionId);
};

export const Section: React.FC = () => {
  const router = useRouter();
  const { sectionId } = router.query;
  const { cookbook, section } = useStore(state => state);

  useEffect(() => {
    init(sectionId?.toString());
  }, [sectionId]);

  if (cookbook && section) {
    return (
      <div
        css={css({
          display: 'flex  ',
        })}>
        <CookbookSection section={section} />
        <TwitchSidebar streamers={cookbook.streams}></TwitchSidebar>
      </div>
    );
  }

  return <>Loading..</>;
};

export default Section;
