import { MemoryRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Interview from "./pages/Interview";
import { fetchPageData, sendPageData } from "./store/store-actions";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { USER_ROLES } from "./utils/pages";

let isInitial = true;

const App = () => {
  const dispatch = useDispatch();
  const interviewers = useSelector((state) => state.interviewers);
  const candidates = useSelector((state) => state.candidates);
  const isInitialized = useSelector((state) => state.dataBase.isInitialized);

  useEffect(() => {
    dispatch(fetchPageData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (interviewers.changed)
      dispatch(
        sendPageData({ data: interviewers, type: USER_ROLES.interviewer })
      );
    if (candidates.changed)
      dispatch(sendPageData({ data: candidates, type: USER_ROLES.candidate }));
  }, [interviewers, candidates, dispatch]);

  if (!isInitialized) return <></>;

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
