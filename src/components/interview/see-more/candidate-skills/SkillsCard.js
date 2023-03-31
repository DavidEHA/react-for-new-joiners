import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { ExtensionRounded } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { Add } from "@mui/icons-material";
import { StarRounded } from "@mui/icons-material";

const SkillsCard = ({ skills, handleOpen }) => {
  return (
    <Card sx={{ minWidth: 650, height: 400, marginLeft: "1rem" }}>
      <CardContent
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "2rem",
          justifyContent: "space-between",
        }}
      >
        <div style={{ height: "13rem" }}>
          <Typography variant="h5">Skills to evaluate</Typography>
          {skills.map((skill) => (
            <div key={skill} style={{ fontSize: 16, marginTop: "1rem" }}>
              <StarRounded color="disabled" sx={{ marginBottom: "-6px" }} />{" "}
              {skill}
            </div>
          ))}
        </div>
        <ExtensionRounded
          style={{
            borderRadius: "150px",
            width: "90px",
            height: "90px",
            outline: " solid 5px",
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
          onClick={handleOpen}
          style={{ marginLeft: "1rem" }}
        >
          <Add style={{ marginRight: "0.5rem" }} /> Add Skill
        </Button>
      </div>
    </Card>
  );
};

export default SkillsCard;
