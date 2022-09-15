import * as React from 'react';
import { useRouter } from 'next/router';
import { ROUTES } from '../../constants/constants';
import HttpService from '../../utils/HttpService';
import { useStore } from '../../store/store';
import { useEffect } from 'react';
import { TwitchSidebar } from '../../components/Sidebar/TwitchSidebar/TwitchSidebar';

const init = async (cookbookId?: string | string[]) => {
  if (cookbookId != null) {
    const cookbook = useStore
      .getState()
      .cookbooks.find(cookbook => cookbook._id === cookbookId);

    if (cookbook) {
      const guides = await HttpService.get(ROUTES.GUIDES(cookbook._id));
      useStore.setState({ cookbook, guides });
    }
  }
};

export const CookbookHome: React.FC = () => {
  const router = useRouter();
  const { cookbook } = useStore(state => state);
  const { cookbookId } = router.query;

  useEffect(() => {
    init(cookbookId);
  }, [cookbookId]);

  if (cookbook) {
    return (
      <>
        <TwitchSidebar streamers={cookbook.streams}></TwitchSidebar>
      </>
    );
  }
  return <>Loading..</>;
};

export default CookbookHome;
