import UserList from "./UserList";
import Registration from "./Registration";
import Header from "../components/UI/Header";
import BottomButtons from "../components/UI/BottomButtons";
import Summary from "./Summary";

const HomePage = () => {
  return (
    <>
      <Header />
      <Registration />
      <UserList />
      <Summary />
      <BottomButtons />
    </>
  );
};

export default HomePage;
