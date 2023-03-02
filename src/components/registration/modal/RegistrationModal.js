import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CandidateModalContent from "./CandidateModalContent";
import InterviwerModalContent from "./InterviwerModalContent";

const RegistrationModal = () => {
  const leftButtonName = "Cancel";
  const rightButtonName = "Save";
  const showInputsFor = "Candidate";
  const inputTypes = {
    interviewer: "Interviewer",
    candidate: "Candidate",
  };
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
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
          <Button onClick={handleClose}>{leftButtonName}</Button>
          <Button
            style={{
              marginLeft: "10px",
              marginRight: "15px",
              marginBottom: "10px",
            }}
            variant="contained"
            onClick={handleClose}
          >
            {rightButtonName}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default RegistrationModal;
