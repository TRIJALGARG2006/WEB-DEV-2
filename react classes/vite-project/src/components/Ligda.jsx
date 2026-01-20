import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div
      style={dark ? { backgroundColor: "black", color: "white" } : { backgroundColor: "white", color: "black" }}>
      <h1>{dark ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
  );
}

export default App;