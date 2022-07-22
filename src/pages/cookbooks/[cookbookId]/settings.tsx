import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';

export const Settings: FunctionComponent = () => {
  const router = useRouter();
  const { cookbookId } = router.query;

  return <></>;
};

export default Settings;
