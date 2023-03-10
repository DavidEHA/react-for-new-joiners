// import UserList from "./UserList";
// import Registration from "./Registration";
// import Header from "../components/UI/Header";
import { usePageController } from "../custom-hooks/usePageController";
// import BottomButtons from "../components/UI/BottomButtons";
import Interview from "./Interview";

const HomePage = () => {
  const { ready } = usePageController();

  return (
    <>
      {ready && (
        <>
          {/* <Header />
          <Registration />
          <UserList />
          <BottomButtons /> */}
          <Interview/>
        </>
      )}
    </>
  );
};

export default HomePage;
