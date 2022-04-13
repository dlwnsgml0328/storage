import React, { useEffect, useState } from "react";

const Count = () => {
  const [obj, setObj] = useState({ age: 26, name: "lee", hobby: "coding" });

  useEffect(() => {
    console.log("obj: ", obj);
  }, [obj]);

  useEffect(() => {
    setTimeout(() => {
      // setObj({ height: 200 });
      setObj({ ...obj, height: 200 });
    }, 3000);
  }, [obj]);
  return (
    <div className="App">
      <p>{obj.age}</p>
      <p>{obj.name}</p>
      <p>{obj.hobby}</p>
      <p>{obj.height && obj.height}</p>
    </div>
  );
};

export default Count;
