import { Route, Routes, BrowserRouter } from "react-router-dom";
import ApiTest from "../../pages/ApiTest";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/test" element={<ApiTest />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
