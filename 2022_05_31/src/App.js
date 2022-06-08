import Counter from './components/Counter';
import Pokemon from './components/Pokemon';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Selection from './components/Selection';
import ErrorBound from './components/ErrorBound';
import Error from './components/Error';

export default function App() {
  return (
    <BrowserRouter className='App'>
      <Header />

      <Routes>
        <Route path='/' exact element={<Counter />} />
        <Route path='/selection' element={<Selection />} />
        <Route path='/poke' element={<Pokemon />} />
        <Route path='/error' element={<ErrorBound />} />

        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
