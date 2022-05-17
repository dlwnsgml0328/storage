import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

import Home from './pages/Home';
import Live from './pages/Live';
import Mini from './pages/Mini';

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

      <Routes>
        <Route path='/mini' element={<Mini />} />
      </Routes>

      <Routes>
        <Route path='/live' element={<Live />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
