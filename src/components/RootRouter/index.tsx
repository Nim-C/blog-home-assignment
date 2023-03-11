import { Navigate, Route, Routes } from 'react-router-dom';
import Home from 'src/pages/Home';

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default RootRouter;
