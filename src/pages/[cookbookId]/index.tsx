import * as React from 'react';
import { useRouter } from 'next/router';
import { ROUTES } from '../../constants/constants';
import HttpService from '../../utils/HttpService';
import { useStore } from '../../store/store';
import { EuiText } from '@elastic/eui';
import { useEffect } from 'react';

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

  useEffect(() => {
    init(cookbookId);
  }, [cookbookId]);

  return (
    <>
      <EuiText>You are in Cookbook: {cookbookId}</EuiText>
    </>
  );
};

export default CookbookHome;
