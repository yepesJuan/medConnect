import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu } from './Components/Menu';
// import icon from '../../assets/icon.svg';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
      </Routes>
    </Router>
  );
}
