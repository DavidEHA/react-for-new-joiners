import Button from "@mui/material/Button";
import { Dialog } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { skillsToEvaluate } from "../../../../custom-hooks/useCandidateSkills";

const SkillsDialog = ({
  open,
  skillsSelected,
  handleClose,
  handleSelectSkill,
  handleOnSubmit,
}) => {
  return (
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
  );
};

export default SkillsDialog;
