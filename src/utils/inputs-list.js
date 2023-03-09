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
    type: "email",
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
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "Type your Email",
    action: CANDIDATE_ACTIONS.email,
  },
];

export const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Full name", width: 300 },
  {
    field: "email",
    headerName: "Email",
    width: 300,
  },
  {
    field: "type",
    headerName: "Type of user",
    width: 200,
  },
  {
    field: "candidateInfo",
    headerName: "Candidate Info",
    width: 200,
  },
];

