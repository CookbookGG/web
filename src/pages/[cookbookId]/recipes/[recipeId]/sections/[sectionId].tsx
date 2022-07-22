import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';

export const Section: FunctionComponent = () => {
  const router = useRouter();
  const { cookbookId, recipeId, sectionId } = router.query;

  return <></>;
};
