import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Card = ({ title }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
    </div>
  );
};

const App = () => {
  const [hasLiked, setHasLiked] = useState(false);
  return (
    <div className="card-container">
      <Card title="Tarzan " hasLiked={hasLiked} />
      <Card title="Superman " />
    </div>
  );
};
export default App;
