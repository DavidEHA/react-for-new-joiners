import InterviewersList from "./InteviewersList";
import Registration from "./registration/Registration";
import Header from "./UI/Header";
import { usePageController } from "../custom-hooks/usePageController";
import { useSelector } from "react-redux";
import BottomButtons from "./UI/BottomButtons";

const HomePage = () => {
  const pageIndex = useSelector((state) => state.pages.pageIndex);
  const { ready } = usePageController();

  return (
    <>
      {ready && (
        <>
          <Header />
          {(pageIndex === 0 || pageIndex === 2) && <Registration />}
          {pageIndex === 1 && <InterviewersList />}
          <BottomButtons />
        </>
      )}
    </>
  );
};

export default HomePage;
