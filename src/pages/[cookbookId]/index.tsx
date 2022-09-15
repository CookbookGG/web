import * as React from 'react';
import { useRouter } from 'next/router';
import { ROUTES } from '../../../constants/constants';
import HttpService from '../../../utils/HttpService';
import { useStore } from '../../../store/store';
import { useState, useEffect } from 'react';
import { TwitchSidebar } from '../../../components/Sidebar/TwitchSidebar/TwitchSidebar';

export const CookbookHome: React.FC = () => {
  const router = useRouter();
  const { cookbookId } = router.query;
  const [cookbook, setCookbook] = useState(useStore.getState().cookbook);
  const [streams, setStreams] = useState(useStore.getState().cookbook?.streams);

  useEffect(() => {
    const init = async (cookbookId?: string | string[]) => {
      if (cookbookId != null) {
        const cookbook = useStore
          .getState()
          .cookbooks.find(cookbook => cookbook._id === cookbookId);

        if (cookbook) {
          setCookbook(cookbook);
          const guides = await HttpService.get(ROUTES.GUIDES(cookbook._id));
          useStore.setState({ cookbook, guides });
          setStreams(cookbook.streams);
        }
      }
    };

    init(cookbookId);
  }, [cookbookId]);

  return (
    <>
      {cookbook && streams && <TwitchSidebar streams={streams}></TwitchSidebar>}
    </>
  );
};

export default CookbookHome;
