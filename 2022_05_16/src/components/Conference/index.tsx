import { selectPeers, useHMSStore } from '@100mslive/react-sdk';
import { useEffect } from 'react';
import Footer from '../Footer';

import Peer from '../Peer';
function Conference() {
  const peers = useHMSStore(selectPeers);

  useEffect(() => {
    console.log('peers updated', peers);
  }, [peers]);
  return (
    <div className='conference-section'>
      <h2>Conference</h2>

      <div className='peers-container'>
        {peers.map((peer) => (
          <Peer key={peer.id} peer={peer} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Conference;
