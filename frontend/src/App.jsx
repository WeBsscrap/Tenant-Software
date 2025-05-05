import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Bundler from './pages/Bundler';

const App = () => {
  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4">
          <Link to="/" className="text-blue-600 mr-4">Home</Link>
          <Link to="/bundler" className="text-blue-600">AI Bundler</Link>
        </nav>
        <Routes>
          <Route path="/bundler" element={<Bundler />} />
          <Route path="/" element={<h1 className="text-xl font-bold">Welcome to Tenant Software</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
