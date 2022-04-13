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
      <p>age: {obj.age}</p>
      <p>name: {obj.name}</p>
      <p>hobby: {obj.hobby}</p>
      <p>height: {obj.height && obj.height}</p>
    </div>
  );
};

export default Count;
