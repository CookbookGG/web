import * as React from 'react';
import { useRouter } from 'next/router';
import { ROUTES } from '../../../constants/constants';
import HttpService from '../../../utils/HttpService';
import { useStore } from '../../../store/store';

const init = async (cookbookId?: string | string[]) => {
  if (cookbookId != null) {
    const cookbook = await HttpService.getById(ROUTES.COOKBOOKS, cookbookId);
    const guides = await HttpService.get(ROUTES.GUIDES(cookbook._id));
    useStore.setState({ cookbook, guides });
  }
};

export const CookbookHome: React.FC = () => {
  const router = useRouter();
  const { cookbookId } = router.query;

  React.useEffect(() => {
    init(cookbookId);
  }, [cookbookId]);

  return <></>;
};

export default CookbookHome;
