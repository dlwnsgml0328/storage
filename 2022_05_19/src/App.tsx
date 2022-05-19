import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header';
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

      <Routes>
        <Route path='/main' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
