import { useState, useEffect, use } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Card with title "${title}" has been liked.`);
  }, [hasLiked]);

  return (
    <div
      className="card"
      onClick={() => setCount((prevState) => prevState + 1)}
    >
      <h2>{title}</h2>

      <button
        onClick={() => {
          setHasLiked(!hasLiked);
        }}
      >
        {count || null}
        {hasLiked ? "👍" : "👎"}
      </button>
    </div>
  );
};

const App = () => {
  const [hasLiked, setHasLiked] = useState(false);
  return (
    <div className="card-container">
      <Card title="Tarzan " />
      <Card title="Superman " />
      <Card title="Legend Of Zelda " />
      <Card title="Fantastic 4: First Steps" />
    </div>
  );
};

export default App;
