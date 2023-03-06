import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { pagesActions } from "../store/pages-slice";
import { useDispatch } from "react-redux";
import { bottomButtonsActions } from "../store/bottom-buttons-slice";

const UserCard = () => {

  const dispatch = useDispatch()
  const interviewers = useSelector((state) => state.interviewers.info);

  const selectInterviewer = (id) => {
    dispatch(pagesActions.toggleInterviewersSelected(id));
    dispatch(bottomButtonsActions.toggleRightButtonDisabled(false));
  };

  return (
    <div className="interviewers-list">
      {interviewers.map((interviewer) => (
        <Card
          onClick={() => {
            selectInterviewer(interviewer.id);
          }}
          key={interviewer.id}
          sx={{ width: 310, marginRight: "2rem", marginBottom: "2rem" }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 20, textAlign: "center" }}
              color="black"
              gutterBottom
            >
              Interviewer {interviewer.id}
            </Typography>
            <Typography sx={{ mt: 3, fontSize: 16 }} color="text.primary">
              {interviewer.name}
            </Typography>
            <Typography variant="body2">{interviewer.eid}</Typography>
            <Typography color="text.secondary" sx={{ mt: 2, fontSize: 16 }}>
              Interviewer: {interviewer.interviewed}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default UserCard;
