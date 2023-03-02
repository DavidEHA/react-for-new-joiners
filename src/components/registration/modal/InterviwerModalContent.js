import { TextField } from "@mui/material";
import { interviewerInputs } from "../../../utils/inputs-list";
import { useReducer } from "react";
import { modalReducer } from "../../modal-hooks/useModal";

const InterviwerModalContent = () => {
  const userId = 1;
  const [state, modalDispatch] = useReducer(modalReducer, {
    name: "",
    id: "",
    eid: "",
  });
  console.log(state);

  const getValue = (input) => {
    if (input.id === "id") return userId;
    if (input.id === "name") return state.name;
    if (input.id === "eid") return state.eid;
  };

  return (
    <>
      {interviewerInputs.map((input) => (
        <TextField
          key={input.id}
          autoFocus={input.id === "name" && true}
          disabled={input.id === "id" && true}
          value={getValue(input)}
          margin="dense"
          fullWidth
          required
          variant="outlined"
          id={input.id}
          label={input.label}
          type={input.type}
          placeholder={input.placeholder}
          onChange={(e) => {
            modalDispatch({ type: input.action, payload: e.target.value });
          }}
        />
      ))}
    </>
  );
};

export default InterviwerModalContent;
