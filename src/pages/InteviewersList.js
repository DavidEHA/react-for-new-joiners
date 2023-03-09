import * as React from "react";
import UserCard from "../components/UserCard";
import { Typography } from "@mui/material";
import SideButtons from "../components/UI/SideButtons";

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
      <div className="interviewers-list-container">
        <UserCard />
        <SideButtons />
      </div>
    </>
  );
};

export default InterviewersList;
