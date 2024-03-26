import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Cut } from './page/Cut';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cut />} />
      </Routes>
    </Router>
  );
}
