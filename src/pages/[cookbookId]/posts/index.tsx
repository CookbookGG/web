import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';

export const PostsHome: FunctionComponent = () => {
  const router = useRouter();
  const { cookbookId } = router.query;

  return <></>;
};

export default PostsHome;
