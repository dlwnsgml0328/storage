import { selectIsConnectedToRoom, useHMSActions, useHMSStore } from '@100mslive/react-sdk';
import { useEffect } from 'react';
import Conference from '../../components/Conference';
import JoinForm from '../../components/JoinForm';
import styled from 'styled-components';

const Live = () => {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();

  useEffect(() => {
    window.onunload = () => {
      console.log('leave the room');
      hmsActions.leave();
    };
  }, [hmsActions]);

  return (
    <LiveWrapper>
      <h3>Live 페이지입니다</h3>
      {isConnected ? <Conference /> : <JoinForm />}
    </LiveWrapper>
  );
};

const LiveWrapper = styled.div`
  .peers-container {
    display: flex;
    flex-wrap: wrap;
  }

  .peer-container {
    width: 100%;
    max-width: 300px;
    margin-right: 5%;
    video {
      width: 100%;
    }
  }
`;

export default Live;
