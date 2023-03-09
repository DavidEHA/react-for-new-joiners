import * as React from "react";
import { Typography } from "@mui/material";
import UserTable from "./UserTable";

const CandidatesList = () => {

  return (
    <>
      <Typography
        sx={{ mt: 4, ml: "30px", fontSize: 22 }}
        color="black"
        gutterBottom
      >
        Candidates list
      </Typography>
      <UserTable/>
    </>
  );
};

export default CandidatesList;
