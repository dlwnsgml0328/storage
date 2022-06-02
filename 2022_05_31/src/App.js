import Counter from './components/Counter';
import Pokemon from './components/Pokemon';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Selection from './components/Selection';

function ErrorHandler({ error }) {
  return (
    <div>
      <p>An error occured:</p>
      <pre>{error.message}</pre>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorHandler}>
      <BrowserRouter className='App'>
        <Header />

        <Routes>
          <Route path='/' exact element={<Counter />} />
          <Route path='/selection' element={<Selection />} />
          <Route path='/poke' element={<Pokemon />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
