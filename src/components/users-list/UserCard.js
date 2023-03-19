import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bottomButtonsActions } from "../../store/bottom-buttons-slice";
import { interviewersActions } from "../../store/interviewers-slice";
import { sideButtonsActions } from "../../store/side-buttons-slice";

const cardStyle = { width: 310, marginRight: "2rem", marginBottom: "2rem" };
const cardStyleHighLighted = {
  width: 310,
  marginRight: "2rem",
  marginBottom: "2rem",
  outline: "#8916c5 solid 2.4px !important",
};

const UserCard = () => {
  const dispatch = useDispatch();
  const interviewers = useSelector((state) => state.interviewers.info);
  const interviewerSelected = useSelector(
    (state) => state.interviewers.interviewerSelected
  );

  const selectInterviewer = (id) => {
    if (id === interviewerSelected) {
      dispatch(interviewersActions.selectInterviewer(null));
      dispatch(bottomButtonsActions.toggleRightButtonDisabled(true));
      dispatch(sideButtonsActions.toggleShowSideButtons(false));
      return;
    }
    dispatch(interviewersActions.selectInterviewer(id));
    dispatch(bottomButtonsActions.toggleRightButtonDisabled(false));
    dispatch(sideButtonsActions.toggleShowSideButtons(true));
  };

  return (
    <div className={"interviewers-list"}>
      {interviewers.map((interviewer) => (
        <Card
          onClick={() => {
            selectInterviewer(interviewer.id);
          }}
          key={interviewer.id}
          sx={
            interviewer.id === interviewerSelected
              ? cardStyleHighLighted
              : cardStyle
          }
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
