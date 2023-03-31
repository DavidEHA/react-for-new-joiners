import { useSelector } from "react-redux";

export const useGetTitle = () => {
  const userType = useSelector((state) => state.modal.userType);
  const firstLetter = userType.charAt(0).toUpperCase();
  const rest = userType.substring(1, userType.length);
  const title = `${firstLetter.concat(rest)} list`
  return title;
};
