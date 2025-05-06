import { Routes, Route } from "react-router-dom";
import Hello from "./pages/Hello";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/hello" element={<Hello />} />
    </Routes>
  );
}

export default App;
