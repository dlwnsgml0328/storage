import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './containers/Home';
import Edit from './containers/Edit';

function App() {
  let navigate = useNavigate();
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/edit' element={<Edit navigate={navigate} />} />
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
