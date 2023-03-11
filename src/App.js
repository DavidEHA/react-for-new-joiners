import { MemoryRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Interview from "./pages/Interview";
const App = () => {
  return (
    <MemoryRouter initialIndex={0}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/question/:id" element={<Interview />} />
      </Routes>
    </MemoryRouter>
  );
};

export default App;
