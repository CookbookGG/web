import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';

export const Guide: FunctionComponent = () => {
  const router = useRouter();
  const { cookbookId, guideId } = router.query;

  return <></>;
};

export default Guide;
