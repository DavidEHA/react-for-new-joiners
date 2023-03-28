import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import DescriptionIcon from "@mui/icons-material/Description";
import { Edit } from "@mui/icons-material";
import { useListController } from "../../../custom-hooks/useListController";
import RegistrationModal from "../../registration/modal/RegistrationModal";
import { useSelector, useDispatch } from "react-redux";
import { pagesActions } from "../../../store/pages-slice";

const cardStyle = {
  minWidth: 650,
  height: 400,
};

const CandidateDetails = () => {
  let disableSeeMoreButton = true;
  const candidates = useSelector((state) => state.candidates.info);
  const candidateSelected = useSelector(
    (state) => state.candidates.candidateSelected
  );
  const candidate = candidates.find(
    (candidate) => candidate.id === candidateSelected
  );
  const dispatch = useDispatch();
  const { editUser } = useListController();
  if (candidate.interviewSummary.length > 0) disableSeeMoreButton = false;

  const handleSeeSummary = () => {
    dispatch(pagesActions.changePageIndex(5));
  };

  return (
    <>
      <Card sx={cardStyle}>
        <CardContent
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "2rem",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Typography sx={{ fontSize: 20 }}>Full Name</Typography>
            <Typography sx={{ fontSize: 16, marginBottom: "1rem" }}>
              {candidate.name}
            </Typography>
            <Typography sx={{ fontSize: 20 }}>Email</Typography>
            <Typography sx={{ fontSize: 16, marginBottom: "1rem" }}>
              {candidate.email}
            </Typography>
            <Typography sx={{ fontSize: 20 }}>Type of contract</Typography>
            <Typography sx={{ fontSize: 16, marginBottom: "1rem" }}>
              {candidate.type}
            </Typography>
          </div>
          <AccountCircleIcon
            style={{
              width: "100px",
              height: "100px",
            }}
          />
        </CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "4rem",
            marginLeft: "4rem",
            marginBottom: "2rem",
          }}
        >
          <Button
            size="medium"
            variant="contained"
            disabled={disableSeeMoreButton}
            onClick={handleSeeSummary}
          >
            <DescriptionIcon style={{ marginRight: "0.5rem" }} />
            See Summary
          </Button>
          <Button
            size="medium"
            variant="contained"
            style={{ marginLeft: "1rem" }}
            onClick={editUser}
          >
            <Edit style={{ marginRight: "0.5rem" }} /> Edit
          </Button>
        </div>
      </Card>
      <RegistrationModal />
    </>
  );
};

export default CandidateDetails;
