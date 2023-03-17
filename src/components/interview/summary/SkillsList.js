import { Typography } from "@mui/material";
import { StarRounded } from "@mui/icons-material";

const SkillsList = () => {
  const skills = ["React", "Angular", "Javascript"];

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
