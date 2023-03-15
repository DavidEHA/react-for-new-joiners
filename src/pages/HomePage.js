import UserList from "./UserList";
import Registration from "./Registration";
import Header from "../components/UI/Header";
import BottomButtons from "../components/UI/BottomButtons";

const HomePage = () => {
  return (
    <>
      <Header />
      <Registration />
      <UserList />
      <BottomButtons />
    </>
  );
};

export default HomePage;
