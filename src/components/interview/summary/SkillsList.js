import { Typography } from "@mui/material";
import { StarRounded } from "@mui/icons-material";
import { useSelector } from "react-redux";

const SkillsList = () => {
  const candidateSelected = useSelector(
    (state) => state.candidates.candidateSelected
  );
  const candidates = useSelector((state) => state.candidates.info);
  const candidate = candidates.find(
    (candidate) => candidate.id === candidateSelected
  );
  const skills = candidate.skills;

  return (
    <div className="summary-content" style={{ marginRight: "2rem" }}>
      <Typography sx={{ fontSize: 18 }} color="text.primary">
        Skills List
      </Typography>
      <hr style={{ width: "100%", marginBottom: "1.5rem" }} />
      {skills.map((skill) => (
        <div key={skill} style={{ fontSize: 16, marginBottom: "1rem" }}>
          <StarRounded color="disabled" sx={{ marginBottom: "-6px" }} /> {skill}
        </div>
      ))}
    </div>
  );
};

export default SkillsList;
