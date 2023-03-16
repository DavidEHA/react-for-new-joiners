import { useSelector } from "react-redux";

const Header = () => {
  const title = useSelector((state) => state.header.title);

  return <section className="header">{title}</section>;
};

export default Header;
