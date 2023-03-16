import { Typography } from "@mui/material";

const CandidateInfo = () => {
  const name = "David";
  const email = "David_hernandez@outlook.com";
  const type = "External";
  const interviewedBy = "Jhon";
  return (
    <div className="summary-content">
      <Typography sx={{ fontSize: 18 }} color="text.primary">
        Candidate Infromation
      </Typography>
      <hr style={{ width: "100%", marginBottom: "1.5rem" }} />
      <Typography sx={{ fontSize: 16 }}>Full Name</Typography>
      <Typography sx={{ fontSize: 12, marginBottom: "1rem" }}>
        {name}
      </Typography>
      <Typography sx={{ fontSize: 16 }}>Email</Typography>
      <Typography sx={{ fontSize: 12, marginBottom: "1rem" }}>
        {email}
      </Typography>
      <Typography sx={{ fontSize: 16 }}>Type of contract</Typography>
      <Typography sx={{ fontSize: 12, marginBottom: "1rem" }}>
        {type}
      </Typography>
      <Typography sx={{ fontSize: 16 }}>Interviewed By</Typography>
      <Typography sx={{ fontSize: 12, marginBottom: "1rem" }}>
        {interviewedBy}
      </Typography>
    </div>
  );
};

export default CandidateInfo;
