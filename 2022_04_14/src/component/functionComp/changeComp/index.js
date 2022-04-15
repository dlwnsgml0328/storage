import React, { useCallback, useState } from "react";

const Change = () => {
  const [name, setName] = useState("");

  // useEffect(() => {
  //   console.log("name: ", name);
  // }, [name]);

  const onChange = useCallback((e) => {
    setName(e.target.value);
  }, []);
  return (
    <div className="App">
      <input
        type="text"
        value={name}
        onChange={(e) => onChange(e)}
        placeholder="name"
      />
    </div>
  );
};

export default Change;
