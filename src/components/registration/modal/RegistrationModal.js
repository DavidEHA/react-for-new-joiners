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
import { useCallback } from "react";

const RegistrationModal = () => {
  const openModal = useSelector((state) => state.modal.open);
  const showInputsFor = useSelector((state) => state.modal.userType);
  const rightButtonName = useSelector((state) => state.modal.rightButtonName);
  const leftButtonName = useSelector((state) => state.modal.leftButtonName);
  const interviewers = useSelector((state) => state.interviewers.info);
  const interviewerId = interviewers.length;
  const candidates = useSelector((state) => state.candidates.info);
  const candidateId = candidates.length;

  const initialInterviewerState = {
    name: "",
    eid: "",
  };

  const initialCandidateState = {
    name: "",
    email: "",
    type: "",
  };

  console.log(initialInterviewerState);
  console.log(interviewers);
  console.log(interviewerId);

  const getInitialState = () => {
    if (showInputsFor === userRoles.interviewer) {
      return initialInterviewerState;
    }
    if (showInputsFor === userRoles.candidate) {
      return initialCandidateState;
    }
  };

  const [state, modalDispatch] = useReducer(modalReducer, getInitialState());

  const dispatch = useDispatch();
  const inputTypes = {
    interviewer: "interviewer",
    candidate: "candidate",
  };

  const closeModal = () => {
    dispatch(modalActions.toggleOpenModal(false));
  };
  
  const handleOnSubmit = useCallback(() => {
    dispatch(modalActions.toggleOpenModal(false));
    dispatch(interviewersActions.addUserToInterviewers({ ...state, id: interviewerId }));
  }, [dispatch, interviewerId, state]);

  return (
    <>
      <Dialog open={openModal} onClose={closeModal}>
        <DialogTitle textAlign={"center"}>Add {showInputsFor}</DialogTitle>
        <DialogContent>
          <>
            {showInputsFor === inputTypes.interviewer && (
              <InterviwerModalContent
                state={state}
                modalDispatch={modalDispatch}
                interviewerId={interviewerId}
              />
            )}
            {showInputsFor === inputTypes.candidate && (
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
