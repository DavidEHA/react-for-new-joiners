import { Fab } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import { useState } from "react";
import SummaryTable from "./SummaryTable";

const SummaryDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Fab
        title={`See summary`}
        color="primary"
        style={{ marginBottom: "-28px" }}
        onClick={handleClickOpen}
      >
        <DescriptionIcon />
      </Fab>
      <SummaryTable open={open} handleClose={handleClose} />
    </div>
  );
};

export default SummaryDialog;
