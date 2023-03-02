import { TextField } from "@mui/material";
import { interviewerInputs } from "../../../utils/inputs-list";

const InterviwerModalContent = () => {
  const userId = 1;

  return (
    <>
      {interviewerInputs.map((input) => (
        <TextField
          key={input.id}
          autoFocus={input.id === "name" && true}
          disabled={input.id === "id" && true}
          value={input.id === "id" ? userId : ""}
          margin="normal"
          fullWidth
          required
          variant="outlined"
          id={input.id}
          label={input.label}
          type={input.type}
          placeholder={input.placeholder}
          // onChange={(e) => {
          //   updateData({ key: input.key, value: e.target.value });
          // }}
        />
      ))}
    </>
  );
};

export default InterviwerModalContent;
