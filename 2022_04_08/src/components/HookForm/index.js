import React from "react";

const HookForm = () => {
  return (
    <div>
      <h1>Hello React form</h1>

      <form
        onSubmit={(e, data) => {
          e.preventDefault();
          console.log(data);
        }}
      >
        <div>
          <input type="radio" name="radios" value="1" />1
        </div>
        <div>
          <input type="radio" name="radios" value="2" />2
        </div>
        <div>
          <input type="radio" name="radios" value="3" />3
        </div>
        <div>
          <input type="radio" name="radios" value="4" />4
        </div>
        <button type="submit">result</button>
      </form>
    </div>
  );
};

export default HookForm;
