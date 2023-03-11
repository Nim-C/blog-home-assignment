import { Navigate, Route, Routes } from 'react-router-dom';
// import postList from 'src/assets/blogs/posts-list.json';
import Blog from 'src/pages/Blog';

import Home from 'src/pages/Home';
import PostPage from 'src/pages/Post';

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="blog" element={<Blog />} />
      <Route path="blog/:postId" element={<PostPage />} />
      {/* <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
  );
};

export default RootRouter;
