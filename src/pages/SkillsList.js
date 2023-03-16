import { Typography } from "@mui/material";
import { StarRounded } from "@mui/icons-material";

const SkillsList = () => {
  const skills = ["React", "Angular", "Javascript"];

  return (
    <div className="summary-content">
      <Typography sx={{ fontSize: 18 }} color="text.primary">
        Skills List
      </Typography>
      <hr style={{ width: "100%", marginBottom: "1.5rem" }} />
      {skills.map((skill) => (
        <Typography sx={{ fontSize: 16, marginBottom: "1rem" }}>
          <div style={{ marginBottom: "0.5rem" }}>
            <StarRounded color="disabled" sx={{ marginBottom: "-6px" }} />{" "}
            {skill}
          </div>
        </Typography>
      ))}
    </div>
  );
};

export default SkillsList;
