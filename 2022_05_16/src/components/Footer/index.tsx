import { useAVToggle, useHMSActions } from '@100mslive/react-sdk';

function Footer() {
  const hmsActions = useHMSActions();

  const { isLocalAudioEnabled, isLocalVideoEnabled, toggleAudio, toggleVideo } = useAVToggle();
  return (
    <div className='control-bar'>
      <button className='btn-control' onClick={toggleAudio}>
        {isLocalAudioEnabled ? 'Mute' : 'Unmute'}
      </button>
      <button className='btn-control' onClick={toggleVideo}>
        {isLocalVideoEnabled ? 'Hide' : 'Unhide'}
      </button>
      <button className='btn-control' onClick={() => hmsActions.leave()}>
        leave
      </button>
    </div>
  );
}

export default Footer;
