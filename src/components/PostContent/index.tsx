import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Post } from 'src/types';

import './styles.scss';

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
    <section id="post-content">
      <Link to="/blog/" id="button-back-to-blog">
        {'<- Back to blog page'}
      </Link>
      <h2>{post.mainTitle}</h2>
      <h4>{post.summary}</h4>
      {paragraphs}
    </section>
  );
};

export default PostContent;
