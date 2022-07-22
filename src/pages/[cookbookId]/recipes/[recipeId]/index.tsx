import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';

export const Recipe: FunctionComponent = () => {
  const router = useRouter();
  const { cookbookId, recipeId } = router.query;

  return <></>;
};
