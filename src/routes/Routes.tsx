import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
    </Routes>
  );
};

export default AppRoutes;
