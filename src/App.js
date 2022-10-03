import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes basename={process.env.PUBLIC_URL}>
        <Route path="/" element={<div>Default</div>}></Route>
        <Route path="/App" element={<div>Enter APP</div>}></Route>
      </Routes>
      <Link to="/">Back</Link>
      <Link to="App">App Link</Link>
    </div>
  );
}

export default App;
