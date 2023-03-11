import { useNavigate, useParams } from 'react-router-dom';

import { PostsCollectionContextType } from 'src/types';
import PostContent from 'src/components/PostContent';

import { useContext } from 'react';
import { PostsCollectionContext } from 'src/context/postsCollectionContext';

const PostPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { postCollection } = useContext(
    PostsCollectionContext
  ) as PostsCollectionContextType;

  const selectedPost = postCollection[postId as string];

  if (!selectedPost) {
    navigate('/blog/');
    return null;
  }

  return <PostContent post={selectedPost} />;
};

export default PostPage;
