import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import Home from "./pages/Home";
import History from './components/History';


function App() {
  return (
    <div className="container py-4">
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4 rounded shadow-sm px-3">
        <Link className="navbar-brand" to="/">MindMirror</Link>
        <div className="ml-auto">
          <Link className="btn btn-outline-primary me-2" to="/">Journal</Link>
          <Link className="btn btn-outline-success" to="/history">History</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/history" element={<History/>} />
      </Routes>
    </div>
  );
}

export default App;
