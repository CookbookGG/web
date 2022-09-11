import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';

export const Post: FunctionComponent = () => {
  const router = useRouter();
  const { cookbookId, postId } = router.query;

  return <></>;
};

export default Post;
