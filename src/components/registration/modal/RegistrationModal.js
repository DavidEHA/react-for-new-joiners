import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CandidateModalContent from "./CandidateModalContent";
import InterviwerModalContent from "./InterviwerModalContent";
import { useSelector } from "react-redux";
import { modalActions } from "../../../store/modal-slice";
import { interviewersActions } from "../../../store/interviewers-slice";
import { useDispatch } from "react-redux";
import { useReducer } from "react";
import { modalReducer } from "../../../custom-hooks/useModal";
import { USER_ROLES } from "../../../utils/pages";
import { candidatesActions } from "../../../store/candidates-slice";
import { GENERAL_ACTIONS } from "../../../custom-hooks/useModal";
import { INITIAL_CANDIDATE_STATE } from "../../../utils/data";
import { INITIAL_INTERVIEWER_STATE } from "../../../utils/data";
import { pagesActions } from "../../../store/pages-slice";

const RegistrationModal = () => {
  const openModal = useSelector((state) => state.modal.open);
  const showInputsFor = useSelector((state) => state.modal.userType);
  const rightButtonName = useSelector((state) => state.modal.rightButtonName);
  const leftButtonName = useSelector((state) => state.modal.leftButtonName);
  const interviewers = useSelector((state) => state.interviewers.info);
  const interviewerId = interviewers.length;
  const candidates = useSelector((state) => state.candidates.info);
  const candidateId = candidates.length;
  const dispatch = useDispatch();

  const getId = () => {
    let id = Number;
    if (showInputsFor === USER_ROLES.interviewer) {
      return (id = interviewerId);
    }
    if (showInputsFor === USER_ROLES.candidate) {
      return (id = candidateId);
    }
    return id;
  };

  const getInitialState = () => {
    if (showInputsFor === USER_ROLES.interviewer) {
      return INITIAL_INTERVIEWER_STATE;
    }
    if (showInputsFor === USER_ROLES.candidate) {
      return INITIAL_CANDIDATE_STATE;
    }
  };

  const [state, modalDispatch] = useReducer(modalReducer, getInitialState());

  const updateUserData = (id) => {
    if (showInputsFor === USER_ROLES.interviewer) {
      dispatch(interviewersActions.addUserToInterviewers({ ...state, id: id }));
      dispatch(pagesActions.changePageIndex(1));
    }
    if (showInputsFor === USER_ROLES.candidate) {
      dispatch(candidatesActions.addUserToCandidates({ ...state, id: id }));
      dispatch(pagesActions.changePageIndex(2));
    }
    closeModal();
  };

  const closeModal = () => {
    dispatch(modalActions.toggleOpenModal(false));
    modalDispatch({ type: GENERAL_ACTIONS.reset });
  };

  const handleOnSubmit = () => {
    const id = getId();
    updateUserData(id);
  };

  return (
    <>
      <Dialog open={openModal} onClose={closeModal}>
        <DialogTitle textAlign={"center"}>Add {showInputsFor}</DialogTitle>
        <DialogContent>
          <>
            {showInputsFor === USER_ROLES.interviewer && (
              <InterviwerModalContent
                state={state}
                modalDispatch={modalDispatch}
                interviewerId={interviewerId}
              />
            )}
            {showInputsFor === USER_ROLES.candidate && (
              <CandidateModalContent
                state={state}
                modalDispatch={modalDispatch}
                candidateId={candidateId}
              />
            )}
          </>
        </DialogContent>
        <DialogActions
          sx={{
            marginLeft: "10px",
            marginRight: "15px",
            marginBottom: "10px",
          }}
        >
          <Button onClick={closeModal}>{leftButtonName}</Button>
          <Button variant="contained" onClick={handleOnSubmit}>
            {rightButtonName}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default RegistrationModal;
