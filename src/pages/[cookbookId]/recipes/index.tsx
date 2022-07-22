import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';

export const RecipesHome: FunctionComponent = () => {
  const router = useRouter();
  const { cookbookId } = router.query;

  return <></>;
};
