import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { ExtensionRounded } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { Add } from "@mui/icons-material";
import { StarRounded } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Dialog } from "@mui/material";
import { useState } from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux";
import { candidatesActions } from "../../../store/candidates-slice";

const skillsToEvaluate = [
  { id: "bootstrap", name: "Bootstrap" },
  { id: "node-js", name: "Node JS" },
  { id: "react-js", name: "React JS" },
  { id: "vue-js", name: "Vue JS" },
  { id: "angular-6", name: "Angular +6" },
];

const CandidateSkills = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const candidateSelected = useSelector(
    (state) => state.candidates.candidateSelected
  );
  const candidates = useSelector((state) => state.candidates.info);
  const candidate = candidates.find(
    (candidate) => candidate.id === candidateSelected
  );
  const skills = candidate.skills;
  const [skillsSelected, setSkillsSelected] = useState(skills);

  const handleClose = () => {
    setSkillsSelected(skills);
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleOnSubmit = () => {
    dispatch(
      candidatesActions.addSkills({ id: candidate.id, skills: skillsSelected })
    );
    setOpen(false);
  };

  const handleSelectSkill = (name) => {
    setSkillsSelected((skillList) => {
      if (skillList.includes(name)) {
        const newArray = skillList.filter((item) => item !== name);
        return newArray;
      }
      return [...skillList, name];
    });
  };

  return (
    <>
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

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          textAlign={"center"}
          variant="h5"
          style={{ fontWeight: "bold" }}
        >
          Skills to evaluate
        </DialogTitle>
        <DialogContent>
          <FormGroup
            sx={{
              justifyContent: "center",
              maxHeight: "8rem",
              minWidth: "20rem",
            }}
          >
            {skillsToEvaluate.map((skill) => (
              <FormControlLabel
                key={skill.id}
                control={
                  <Checkbox
                    checked={skillsSelected.includes(skill.name)}
                    onClick={() => {
                      handleSelectSkill(skill.name);
                    }}
                  />
                }
                label={skill.name}
              />
            ))}
          </FormGroup>
        </DialogContent>
        <DialogActions
          sx={{
            marginLeft: "10px",
            marginRight: "15px",
            marginBottom: "10px",
          }}
        >
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleOnSubmit}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CandidateSkills;
