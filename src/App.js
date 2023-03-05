import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {

  const interviewers = useSelector((state) => state.interviewers);
  const candidates = useSelector((state) => state.candidates);

  console.log(interviewers);
  console.log(candidates);

  return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage/>
            }
          />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
