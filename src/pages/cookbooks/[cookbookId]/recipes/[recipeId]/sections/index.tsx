import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';

export const SectionsHome: FunctionComponent = () => {
  const router = useRouter();
  const { cookbookId, recipeId } = router.query;

  return <></>;
};

export default SectionsHome;
