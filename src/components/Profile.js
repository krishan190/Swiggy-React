import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // API call
    console.log("useEffect is called");
  }, []);

  console.log("render");

  return (
    <div>
      <h1>Profile functional Cmp </h1>
      <h3>Name : {props.name}</h3>
      <h3>Count : {count}</h3>
      <button onClick={() => setCount(1)}>Count</button>
    </div>
  );
};

export default Profile;
