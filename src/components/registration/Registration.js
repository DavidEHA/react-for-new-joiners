import BottomButtons from "../UI/BottomButtons";
import RegistrationContent from "./RegistrationContent";
import RegistrationModal from "./modal/RegistrationModal";
import { useSelector } from "react-redux";
import { pagesActions } from "../../store/pages-slice";
import { useDispatch } from "react-redux";
import { bottomButtonsActions } from "../../store/bottom-buttons-slice";

const Registration = () => {
  const dispatch = useDispatch();
  const interviewers = useSelector((state) => state.interviewers.info);
  const registrationPage = useSelector(
    (state) => state.pages.interviewersRegistration
  );
  if (interviewers.length > 0) {
    dispatch(pagesActions.toggleInterviewersRegistration(false));
    dispatch(bottomButtonsActions.toggleShowRightButton(true));
  }

  return (
    <>
      <div className="registration">
        {registrationPage && <RegistrationContent />}
        <RegistrationModal />
        {registrationPage && <BottomButtons />}
      </div>
    </>
  );
};

export default Registration;
