import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import PlayGround from './pages/Playground';
import TypeGround from './pages/Typeground';

function App() {
  return (
    <BrowserRouter className='App'>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Routes>
        <Route path='/playground' element={<PlayGround />} />
      </Routes>
      <Routes>
        <Route path='/typeground' element={<TypeGround />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
