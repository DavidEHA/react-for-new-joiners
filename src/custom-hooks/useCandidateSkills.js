import { useDispatch } from "react-redux";
import { candidatesActions } from "../store/candidates-slice";
import { useState } from "react";
import { useSelector } from "react-redux";

export const skillsToEvaluate = [
    { id: "bootstrap", name: "Bootstrap" },
    { id: "node-js", name: "Node JS" },
    { id: "react-js", name: "React JS" },
    { id: "vue-js", name: "Vue JS" },
    { id: "angular-6", name: "Angular +6" },
  ];

export const useCandidateSkills = () => {
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

    const handleOpen = () => {
        setOpen(true);
      }
  
    const handleClose = () => {
      setSkillsSelected(skills);
      setOpen(false);
    }
  
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

    return{
        open,
        skills,
        skillsSelected,
        handleOpen,
        handleClose,
        handleOnSubmit,
        handleSelectSkill
    }
}