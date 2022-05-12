import React from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';

interface IProps {
  name: string;
}

const Login = ({ name }: IProps) => {
  const [value, setValue] = useState<string>('');
  const [user, setUser] = useState<string>('');

  useEffect(() => {
    if (user.length > 1) {
      setTimeout(() => {
        setUser('');
      }, 2000);
    }
  }, [user]);

  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      setUser(value);
      setValue('');
    },
    [value]
  );
  return (
    <div>
      <h3>{name}의 로그인 폼</h3>

      {user && <h3>{user} 님 어서오세요!</h3>}
      <form onSubmit={onSubmit}>
        <input type='text' value={value} onChange={(e) => setValue(e.target.value)} />

        <button type='submit'>저장</button>
      </form>
    </div>
  );
};

export default Login;
