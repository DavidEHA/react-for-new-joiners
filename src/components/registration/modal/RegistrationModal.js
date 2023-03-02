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

const RegistrationModal = () => {

  const openModal = useSelector((state) => state.modal.open);
  const showInputsFor = useSelector((state) => state.modal.userType);
  const rightButtonName = useSelector((state) => state.modal.rightButtonName);

  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(modalActions.toggleOpenModal(false));
  };

  const leftButtonName = "Cancel";

  const inputTypes = {
    interviewer: "interviewer",
    candidate: "candidate",
  };

  const handleOnSubmit = () => {
    closeModal()
    console.log("hola")
  };

  return (
    <>
      <Dialog open={openModal} onClose={closeModal}>
        <DialogTitle textAlign={"center"}>Add {showInputsFor}</DialogTitle>
        <DialogContent>
          <>
            {showInputsFor === inputTypes.interviewer && (
              <InterviwerModalContent />
            )}
            {showInputsFor === inputTypes.candidate && (
              <CandidateModalContent />
            )}
          </>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>{leftButtonName}</Button>
          <Button
            style={{
              marginLeft: "10px",
              marginRight: "15px",
              marginBottom: "10px",
            }}
            variant="contained"
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
