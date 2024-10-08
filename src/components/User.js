import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [age] = useState(18);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Settimeout");
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  console.log("Render");
  //setCount(2);
  return (
    <div className="user-card">
      <h1>Name: {name}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <h2>Count:{count}</h2>
      <h2>Age:{age}</h2>
      <h3>Address: Bangalore</h3>
      <h3>Contact: ythakur909@gmail.com</h3>
    </div>
  );
};

export default User;
