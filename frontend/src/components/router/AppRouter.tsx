import { Route, Routes, BrowserRouter } from "react-router-dom";
import Hello from "../../pages/Hello";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/hello" element={<Hello />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
