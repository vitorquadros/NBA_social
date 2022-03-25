import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error404Page from './pages/Error404Page';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Register from './pages/Register';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </Router>
  );
}
