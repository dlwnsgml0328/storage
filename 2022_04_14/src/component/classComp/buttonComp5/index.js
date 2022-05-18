import React, { useCallback, useEffect, useState } from "react";

const Foo5 = () => {
  const [onScript, setOnScript] = useState({ bool: true, age: 20 });

  useEffect(() => {
    console.log("onscript - foo5: ", onScript);
  }, [onScript]);

  const handleScript = useCallback(() => {
    setOnScript({
      bool: !onScript.bool,
      age: 25,
    });
  }, [onScript]);

  return (
    <div>
      <div>
        {onScript ? (
          <>
            <span>스크립트 열림</span>
            <p>나이: {onScript.age}</p>
          </>
        ) : (
          <>
            <span>스크립트 닫힘</span>
            <p>나이: {onScript.age}</p>
          </>
        )}
      </div>
      <button type="button" onClick={handleScript}>
        스크립트 열기
      </button>
      <button
        type="button"
        onClick={() => setOnScript({ bool: !onScript.bool, age: 20 })}
      >
        스크립트 닫기
      </button>
    </div>
  );
};

export default Foo5;
