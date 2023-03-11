import { FC } from 'react';
import { Post } from 'src/types';

interface PostContentProps {
  post: Post;
}

const PostContent: FC<PostContentProps> = ({ post }) => {
  const paragraphs = post.content.map(({ paragraphTitle, paragraphText }) => (
    <p key={paragraphText}>
      {paragraphTitle ? (
        <>
          <strong>{paragraphTitle}</strong>
          <br />
        </>
      ) : null}
      {paragraphText}
    </p>
  ));

  return (
    <section>
      <h2>{post.mainTitle}</h2>
      <h4>{post.mainTitle}</h4>
      {paragraphs}
    </section>
  );
};

export default PostContent;
