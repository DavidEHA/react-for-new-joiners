import * as React from "react";
import UserCard from "./UserCard";
import { Typography } from "@mui/material";

const InterviewersList = () => {

  return (
    <>
      <Typography
        sx={{ mt: 4, ml: "30px", fontSize: 22 }}
        color="black"
        gutterBottom
      >
        Interviewers list
      </Typography>
      <UserCard />
    </>
  );
};

export default InterviewersList;
