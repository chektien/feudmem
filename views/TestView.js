import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

// Parent component
export default function LoginView() {
  const navigation = useNavigation();
  const [count, setCount] = useState(0);

  // Callback function to update the count state
  const updateCount = () => {
    console.log("before", count);
    setCount(count + 1);
    console.log("after", count);
  };

  return (
    <div>
      <p>Count: {count}</p>
      {/* Pass handleButtonClick function to ChildComponent */}
      <ChildComponent handleButtonClick={updateCount} />
    </div>
  );
}

// Child component
function ChildComponent(props) {
  // Don't update the count here
  // This will cause an infinite loop
  // props.updateCount(props.count + 1);

  return <button onClick={props.handleButtonClick}>Increment Count</button>;
}
