import { useEffect, useRef } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Welcome from 'src/pages/Welcome';

function App() {
  const mounted = useRef<boolean>(false);

  useEffect(() => {
    if (mounted.current) {
      // console.log('');
    }
    mounted.current = true;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
