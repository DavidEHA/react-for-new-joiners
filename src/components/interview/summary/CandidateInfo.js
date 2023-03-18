import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

const CandidateInfo = () => {
  const candidateSelected = useSelector(
    (state) => state.candidates.candidateSelected
  );
  const candidates = useSelector((state) => state.candidates.info);
  const candidate = candidates.find(
    (candidate) => candidate.id === candidateSelected
  );
  const interviewerSelected = useSelector(
    (state) => state.interviewers.interviewerSelected
  );
  const interviewers = useSelector((state) => state.interviewers.info);
  const interviewer = interviewers.find(
    (interviewer) => interviewer.id === interviewerSelected
  );

  return (
    <div className="summary-content" style={{ marginRight: "2rem" }}>
      <Typography sx={{ fontSize: 18 }} color="text.primary">
        Candidate Infromation
      </Typography>
      <hr style={{ width: "100%", marginBottom: "1.5rem" }} />
      <Typography sx={{ fontSize: 16 }}>Full Name</Typography>
      <Typography sx={{ fontSize: 12, marginBottom: "1rem" }}>
        {candidate.name}
      </Typography>
      <Typography sx={{ fontSize: 16 }}>Email</Typography>
      <Typography sx={{ fontSize: 12, marginBottom: "1rem" }}>
        {candidate.email}
      </Typography>
      <Typography sx={{ fontSize: 16 }}>Type of contract</Typography>
      <Typography sx={{ fontSize: 12, marginBottom: "1rem" }}>
        {candidate.type}
      </Typography>
      <Typography sx={{ fontSize: 16 }}>Interviewed By</Typography>
      <Typography sx={{ fontSize: 12, marginBottom: "1rem" }}>
        {interviewer.name}
      </Typography>
    </div>
  );
};

export default CandidateInfo;
