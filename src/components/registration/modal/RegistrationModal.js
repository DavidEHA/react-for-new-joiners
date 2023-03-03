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
import { modalReducer } from "../../modal-hooks/useModal";
import { userRoles } from "../../../utils/data";
import { candidatesActions } from "../../../store/candidates-slice";

const INITIAL_INTERVIEWER_STATE = {
  name: "",
  eid: "",
};
const INITIAL_CANDIDATE_STATE = {
  name: "",
  eMail: "",
  type: "",
};

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
    if (showInputsFor === userRoles.interviewer) {
      return (id = interviewerId);
    }
    if (showInputsFor === userRoles.candidate) {
      return (id = candidateId);
    }
    return id;
  };

  const getInitialState = () => {
    if (showInputsFor === userRoles.interviewer) {
      return INITIAL_INTERVIEWER_STATE;
    }
    if (showInputsFor === userRoles.candidate) {
      return INITIAL_CANDIDATE_STATE;
    }
  };

  const [state, modalDispatch] = useReducer(modalReducer, getInitialState());

  const updateUserData = (id) => {
    if (showInputsFor === userRoles.interviewer) {
      dispatch(interviewersActions.addUserToInterviewers({ ...state, id: id }));
    }
    if (showInputsFor === userRoles.candidate) {
      dispatch(candidatesActions.addUserToCandidates({ ...state, id: id }));
    }
  };

  const closeModal = () => {
    dispatch(modalActions.toggleOpenModal(false));
  };

  const handleOnSubmit = () => {
    const id = getId();
    updateUserData(id);
    dispatch(modalActions.toggleOpenModal(false));
  };

  return (
    <>
      <Dialog open={openModal} onClose={closeModal}>
        <DialogTitle textAlign={"center"}>Add {showInputsFor}</DialogTitle>
        <DialogContent>
          <>
            {showInputsFor === userRoles.interviewer && (
              <InterviwerModalContent
                state={state}
                modalDispatch={modalDispatch}
                interviewerId={interviewerId}
              />
            )}
            {showInputsFor === userRoles.candidate && (
              <CandidateModalContent
                state={state}
                modalDispatch={modalDispatch}
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
