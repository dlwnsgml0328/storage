import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Edit from './pages/Edit';
import Immsi from './pages/Immsi';

function App() {
  let navigate = useNavigate();
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/edit' element={<Edit navigate={navigate} />} />
      <Route path='/immsi' element={<Immsi />} />
    </Routes>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
