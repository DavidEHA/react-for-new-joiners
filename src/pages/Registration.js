import RegistrationContent from "../components/registration/RegistrationContent";
import RegistrationModal from "../components/registration/modal/RegistrationModal";
import { useSelector } from "react-redux";

const Registration = () => {
  const pageIndex = useSelector((state) => state.pages.pageIndex);

  return (
    <div className="registration">
      {(pageIndex === 0 || pageIndex === 2) && <RegistrationContent />}
      {(pageIndex <= 3 ) && <RegistrationModal />}
    </div>
  );
};

export default Registration;
