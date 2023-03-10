import { useRef } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bottomButtonsActions } from "../../store/bottom-buttons-slice";
import { interviewersActions } from "../../store/interviewers-slice";
import { sideButtonsActions } from "../../store/side-buttons-slice";

const UserCard = () => {
  const dispatch = useDispatch();
  const interviewers = useSelector((state) => state.interviewers.info);
  const isSelected = useRef(false);

  const selectInterviewer = (id) => {
    isSelected.current = !isSelected.current;
    const selectedState = isSelected.current;
    dispatch(bottomButtonsActions.toggleRightButtonDisabled(!selectedState));
    dispatch(sideButtonsActions.toggleShowSideButtons(selectedState));
    isSelected.current === true
      ? dispatch(interviewersActions.selectInterviewer(id))
      : dispatch(interviewersActions.selectInterviewer(null));
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
