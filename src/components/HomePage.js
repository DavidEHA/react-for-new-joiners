import InterviewersList from "./InteviewersList";
import Registration from "./registration/Registration";
import Header from "./UI/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <Registration/>
      <InterviewersList/>
    </>
  );
};

export default HomePage;
