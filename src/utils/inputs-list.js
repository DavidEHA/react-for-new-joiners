import {
  CANDIDATE_ACTIONS,
  INTERVIEWER_ACTIONS,
} from "../custom-hooks/useModal";

export const interviewerInputs = [
  {
    id: "name",
    label: "Name",
    type: "text",
    placeholder: "Type your name",
    action: INTERVIEWER_ACTIONS.name,
  },
  {
    id: "id",
    label: "ID",
    type: "text",
    placeholder: "Type your ID",
    action: INTERVIEWER_ACTIONS.id,
  },
  {
    id: "eid",
    label: "EID",
    type: "eMail",
    placeholder: "Type your Enterprise ID",
    action: INTERVIEWER_ACTIONS.eid,
  },
];

export const candidateInputs = [
  {
    id: "name",
    label: "Name",
    type: "text",
    placeholder: "Type your name",
    action: CANDIDATE_ACTIONS.name,
  },
  {
    id: "eMail",
    label: "Email",
    type: "eMail",
    placeholder: "Type your Email",
    action: CANDIDATE_ACTIONS.eMail,
  },
];

