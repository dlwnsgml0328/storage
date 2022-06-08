import React, { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Counter from '../Counter';

const ErrorBound = () => {
  const [explode, setExplode] = useState(false);

  return (
    <div>
      <button onClick={() => setExplode((e) => !e)}>toggle explode</button>

      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => setExplode(false)}>
        {explode ? (
          <Bomb />
        ) : (
          <div style={{ margin: '5%', border: '1px solid black' }}>
            <Counter />
          </div>
        )}
      </ErrorBoundary>
    </div>
  );
};

export default ErrorBound;

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role='alert'>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function Bomb() {
  throw new Error('💥 CABOOM in your App💥');
}
