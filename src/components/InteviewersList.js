import * as React from "react";
import BottomButtons from "./UI/BottomButtons";
import UserCard from "./UserCard";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

const InterviewersList = () => {
  const registrationPage = useSelector(
    (state) => state.pages.interviewersRegistration
  );

  return (
    <>
      {!registrationPage && (
        <>
          <Typography
            sx={{ mt: 4, ml: "30px", fontSize: 22 }}
            color="black"
            gutterBottom
          >
            Interviewers list
          </Typography>
          <UserCard />
          <BottomButtons />
        </>
      )}
    </>
  );
};

export default InterviewersList;
