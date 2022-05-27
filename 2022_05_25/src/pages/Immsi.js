import React from 'react';
// import 'box/box-flex.css';

const Immsi = () => {
  return (
    <div>
      <h3>Immsi page</h3>
      <picture>
        <source
          srcSet='logo/melting_logo.webp'
          type='image/webp'
          style={{ width: '100%', height: 'auto' }}
        />
        <img
          src='logo/melting_logo.png'
          alt="L'Arc de Triomphe, Wrapped, Paris, 1961-2021"
          style={{ width: '100%', height: 'auto' }}
        />
      </picture>

      <img src='../../uploads/9b4f2aaa23.jpeg' alt='' style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export default Immsi;
