import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { PostsCollectionContext } from 'src/context/postsCollectionContext';
import { PostsCollectionContextType } from 'src/types';

import './styles.scss';

const Blog = () => {
  const { postCollection } = useContext(
    PostsCollectionContext
  ) as PostsCollectionContextType;

  return (
    <section id="blog-posts-links-container">
      {Object.entries(postCollection).map(([key, value]) => (
        <Link key={key} to={key} className="blog-post-link">
          <h4>{value.mainTitle}</h4>
          <p>{value.summary}</p>
        </Link>
      ))}
    </section>
  );
};

export default Blog;
