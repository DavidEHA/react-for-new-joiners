import InterviewersList from "./InteviewersList";
import Registration from "./Registration";
import Header from "../components/UI/Header";
import { usePageController } from "../custom-hooks/usePageController";
import { useSelector } from "react-redux";
import BottomButtons from "../components/UI/BottomButtons";
import CandidatesList from "./CandidatesList";

const HomePage = () => {
  const pageIndex = useSelector((state) => state.pages.pageIndex);
  const { ready } = usePageController();

  return (
    <>
      {ready && (
        <>
          <Header />
          <Registration />
          {pageIndex === 1 && <InterviewersList />}
          {pageIndex === 3 && <CandidatesList />}
          <BottomButtons />
        </>
      )}
    </>
  );
};

export default HomePage;
