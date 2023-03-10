import { useEffect, useRef } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { useAppDispatch } from 'src/store/hooks';
import { fetchDataEntities } from 'src/store/slices/dataEntities/thunks';

import Welcome from 'src/pages/Welcome';

function App() {
  const dispatch = useAppDispatch();
  const mounted = useRef<boolean>(false);

  useEffect(() => {
    if (mounted.current) {
      dispatch(fetchDataEntities());
    }
    mounted.current = true;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
