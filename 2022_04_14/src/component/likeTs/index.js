import React, { useState } from "react";

const LikeTs = () => {
  const [result, setResult] = useState(0);
  /**
   *
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  const sum = (a, b) => {
    let res = a + b;
    setResult(res);
  };

  /**
   *
   * @param {number} a
   * @param {number} b
   */
  const minus = (a, b) => {
    let res = a - b;
    setResult(res);
  };

  // @ts-check
  // @ts-expect-error
  /** @type {number} */
  const multiple = (a, b) => {
    let res = a * b;
    setResult(res);
  };

  return (
    <div>
      <span>2</span>
      <span>+</span>
      <span>3</span>

      <br />
      <button type="button" onClick={() => sum(2, 3)}>
        더하기
      </button>
      <button type="button" onClick={() => minus(2, 3)}>
        빼기
      </button>
      <button type="button" onClick={() => multiple(2, 3)}>
        곱하기
      </button>

      {result !== 0 && <span>{result}</span>}
    </div>
  );
};

export default LikeTs;
