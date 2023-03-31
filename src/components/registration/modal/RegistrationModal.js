import { USER_ROLES } from "../../../utils/pages";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CandidateModalContent from "./CandidateModalContent";
import InterviwerModalContent from "./InterviwerModalContent";
import { useRegistrationModal } from "../../../custom-hooks/useRegistrationModal";

const RegistrationModal = () => {
  const {
    state,
    openModal,
    showInputsFor,
    interviewerId,
    rightButtonName,
    candidateId,
    leftButtonName,
    emptyInput,
    handleOnSubmit,
    modalDispatch,
    closeModal,
  } = useRegistrationModal();

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
          <Button
            variant="contained"
            disabled={emptyInput}
            onClick={handleOnSubmit}
          >
            {rightButtonName}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default RegistrationModal;
