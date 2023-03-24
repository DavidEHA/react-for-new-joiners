import Header from "../components/UI/Header";
import UserList from "./UserList";
import Registration from "./Registration";
import Summary from "./Summary";
import BottomButtons from "../components/UI/BottomButtons";
import SeeMore from "./SeeMore";

const HomePage = () => {
  return (
    <>
      <Header />
      <Registration />
      <UserList />
      <Summary />
      <SeeMore/>
      <BottomButtons />
    </>
  );
};

export default HomePage;
