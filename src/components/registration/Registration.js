import BottomButtons from "../UI/BottomButtons";
import RegistrationContent from "./RegistrationContent";
import RegistrationModal from "./modal/RegistrationModal";

const Registration = () => {
  return (
    <>
      <div className="registration">
        <div className="registration-content">
          <RegistrationContent />
          <RegistrationModal />
        </div>
          <BottomButtons />
      </div>
    </>
  );
};

export default Registration;
