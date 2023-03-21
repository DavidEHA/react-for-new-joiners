import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CardContent from "@mui/material/CardContent";
import { ExtensionRounded } from "@mui/icons-material";
import Button from "@mui/material/Button";
import DescriptionIcon from "@mui/icons-material/Description";
import { Edit } from "@mui/icons-material";
import { Add } from "@mui/icons-material";
import { StarRounded } from "@mui/icons-material";

const cardStyle = {
  minWidth: 650,
  height: 400,
};

const SeeMore = () => {
  // const candidates = useSelector((state) => state.candidates.info);
  // const candidateSelected = useSelector((state) => state.candidates.candidateSelected);
  // const candidate = candidates.find(
  //   (candidate) => candidate.id === candidateSelected
  // );

  const candidate = {
    name: "David Emmanuel",
    email: "david_hernandez48@outlook.com",
    type: "External",
  };
  const skills = ["React", "Angular", "Javascript"];

  return (
    <div className={"see-more-container"}>
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
          <Button size="medium" variant="contained">
            {" "}
            <DescriptionIcon style={{ marginRight: "0.5rem" }} />
            See Summary
          </Button>
          <Button
            size="medium"
            variant="contained"
            style={{ marginLeft: "1rem" }}
          >
            <Edit style={{ marginRight: "0.5rem" }} /> Edit
          </Button>
        </div>
      </Card>
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
            style={{ marginLeft: "1rem" }}
          >
            <Add style={{ marginRight: "0.5rem" }} /> Add Skill
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default SeeMore;
