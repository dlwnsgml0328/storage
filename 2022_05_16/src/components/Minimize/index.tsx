import { useState } from 'react';
import styled from 'styled-components';

const Minimize = () => {
  const [minimize, setMinimize] = useState<boolean>(false);
  return (
    <div className='App' style={{ background: '#000' }}>
      <ModalWrapper minimize={minimize}>
        <button onClick={() => setMinimize((prev) => !prev)}>minimize</button>
        <div className='rect'>
          <h3>rect</h3>
        </div>
      </ModalWrapper>
    </div>
  );
};

interface IModal {
  minimize: boolean;
}

const ModalWrapper = styled.div<IModal>`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  user-select: none;
  color: white;

  ${({ minimize }) =>
    minimize &&
    `
          .rect {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 50%;
            height: 40vh;
            background-color: salmon
          }
  
  
      `};

  h3 {
    margin: 0;
  }

  button {
    cursor: pointer;
  }
`;

export default Minimize;
