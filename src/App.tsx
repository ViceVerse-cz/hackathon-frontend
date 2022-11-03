import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-gray-900 p-5">
      <p>milujeme hackathon</p>
      <button
        className="bg-blue-300 rounded text-white"
        onClick={() => setCount(count + 1)}
      >
        klik klik
      </button>
      <p className="text-red-500">kliknuto: {count}</p>
    </div>
  );
}

export default App;
