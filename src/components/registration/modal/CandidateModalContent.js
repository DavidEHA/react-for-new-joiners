import { TextField } from "@mui/material";
import { candidateInputs } from "../../../utils/inputs-list";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { candidateType } from "../../../utils/data";

const CandidateModalContent = ({ state, modalDispatch }) => {
  const getValue = (input) => {
    if (state.name || state.email === undefined) return "";
    if (input.id === "name") return state.name;
    if (input.id === "eMail") return state.eMail;
  };

  return (
    <>
      {candidateInputs.map((input) => (
        <TextField
          value={getValue(input)}
          key={input.id}
          autoFocus={input.id === "name" && true}
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
      <Box sx={{ minWidth: 120, marginTop: "5px" }}>
        <FormControl fullWidth>
          <InputLabel id="candidates-types">Type *</InputLabel>
          <Select
            labelId="candidates-types"
            id="candidates-types"
            value={state.type}
            onChange={(e) => {
              modalDispatch({
                type: "update_candidate_type",
                payload: e.target.value,
              });
            }}
            label="Type *"
          >
            <MenuItem value={candidateType.internal}>
              {candidateType.internal}
            </MenuItem>
            <MenuItem value={candidateType.external}>
              {candidateType.external}
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default CandidateModalContent;
