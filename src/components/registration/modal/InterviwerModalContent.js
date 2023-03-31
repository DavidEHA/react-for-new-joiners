import { TextField } from "@mui/material";
import { interviewerInputs } from "../../../utils/inputs-list";

const InterviwerModalContent = ({ state, modalDispatch, interviewerId }) => {
  const getValue = (input) => {
    if (state.id === undefined && input.id === "id") return interviewerId;
    if (input.id === "id" && state.id !== undefined) return state.id;
    if (state.name === undefined) return "";
    if (input.id === "name") return state.name;
    if (state.eid === undefined) return "";
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
