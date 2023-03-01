import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/UI/Header";
import Registration from "./components/registration/Registration";

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
              <>
                <Header />
                <Registration />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
