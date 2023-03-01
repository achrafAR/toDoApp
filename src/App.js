import "./App.css";
import Title from "./Components/Title/Title";
import Box from "./Components/Box/Box";
import { useState } from "react";

function App() {
  const [clicked, setClicked] = useState(false);
  const handleSubmit = () => {
    setClicked(!clicked);
  };
  return (
    <div className="App">
      <button className="press_me" onClick={handleSubmit}>
        <h3>Press Me</h3>
      </button>
      <Title />
      <Box clicked={clicked} />
    </div>
  );
}

export default App;
