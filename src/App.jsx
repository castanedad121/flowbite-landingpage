import { Route, Routes } from "react-router-dom";
import { Home, Thanks, ErrorPage } from "./views/index";

import "./App.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
