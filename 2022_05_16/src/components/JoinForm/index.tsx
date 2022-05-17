import { useHMSActions } from '@100mslive/react-sdk';
import React, { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

const JoinForm = () => {
  const hmsActions = useHMSActions();

  const HOST_TOKEN: string = process.env.REACT_APP_HOST_TOKEN as string;
  const GUEST_TOKEN: string = process.env.REACT_APP_GUEST_TOKEN as string;

  const [inputValues, setInputValues] = useState({
    name: '',
    token: '',
  });

  const [onCopy, setOnCopy] = useState(false);

  useEffect(() => {
    if (onCopy) {
      setTimeout(() => {
        setOnCopy(false);
      }, 3000);
    }
  }, [onCopy]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    hmsActions.join({
      userName: inputValues.name,
      authToken: inputValues.token,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Join Room</h2>
      <div className='input-container'>
        <input
          required
          value={inputValues.name}
          onChange={handleInputChange}
          id='name'
          type='text'
          name='name'
          placeholder='Your name'
        />
      </div>
      <div className='input-container'>
        <input
          required
          value={inputValues.token}
          onChange={handleInputChange}
          id='token'
          type='text'
          name='token'
          placeholder='Auth token'
        />
      </div>
      <div className='btn-group'>
        <CopyToClipboard text={HOST_TOKEN} onCopy={() => setOnCopy(true)}>
          <button className='btn-primary'>Copy Host token</button>
        </CopyToClipboard>
        <br />
        <CopyToClipboard text={GUEST_TOKEN} onCopy={() => setOnCopy(true)}>
          <button className='btn-primary'>Copy Guest token</button>
        </CopyToClipboard>
        <br />
        <button className='btn-primary'>Join</button>
      </div>

      {onCopy && <span>Copied!</span>}
    </form>
  );
};

export default JoinForm;
