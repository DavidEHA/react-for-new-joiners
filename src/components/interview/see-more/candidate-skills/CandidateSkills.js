import SkillsCard from "./SkillsCard";
import { useCandidateSkills } from "../../../../custom-hooks/useCandidateSkills";
import SkillsDialog from "./SkillsDialog";

const CandidateSkills = () => {
  const {
    skills,
    open,
    skillsSelected,
    handleOpen,
    handleClose,
    handleSelectSkill,
    handleOnSubmit,
  } = useCandidateSkills();

  return (
    <>
      <SkillsCard skills={skills} handleOpen={handleOpen} />
      <SkillsDialog
        open={open}
        skillsSelected={skillsSelected}
        handleClose={handleClose}
        handleSelectSkill={handleSelectSkill}
        handleOnSubmit={handleOnSubmit}
      />
    </>
  );
};

export default CandidateSkills;
