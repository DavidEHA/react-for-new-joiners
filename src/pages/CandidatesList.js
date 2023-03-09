import * as React from "react";
import { Typography } from "@mui/material";
import UserTable from "../components/UserTable";
import SideButtons from "../components/UI/SideButtons";

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
      <div className="user-list-container">
        <UserTable />
        <SideButtons />
      </div>
    </>
  );
};

export default CandidatesList;
