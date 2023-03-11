import { Link } from 'react-router-dom';
import postList from 'src/assets/blogs/posts-list.json';

const Blog = () => (
  <div>
    {postList.map(({ id }) => (
      <Link key={id} to={id}>
        {id}
      </Link>
    ))}
  </div>
);

export default Blog;
