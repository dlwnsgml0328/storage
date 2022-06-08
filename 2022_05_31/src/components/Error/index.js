import React from 'react';

const Error = () => {
  return (
    <div>
      <h1>Error</h1>

      <button type='button' onClick={() => window.history.go(-1)}>
        back
      </button>
      <button type='button' onClick={() => (window.location.href = '/')}>
        home
      </button>
    </div>
  );
};

export default Error;
