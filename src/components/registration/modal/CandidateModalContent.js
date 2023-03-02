import { TextField } from "@mui/material";
import { candidateInputs } from "../../../utils/inputs-list";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useReducer } from "react";

const initialState = {
  name: String,
  email: String,
  type: "",
};

const CANDIDATE_ACTIONS = {
  name: "update_candidate_name",
  email: "update_candidate_email",
  type: "update_candidate_type",
};

const candidateTypes = {
  internal: "Internal",
  external: "External",
};

function reducer(state, action) {
  switch (action.type) {
    case CANDIDATE_ACTIONS.name:
      return {
        ...state,
        name: action.payload,
      };
    case CANDIDATE_ACTIONS.email:
      return {
        ...state,
        email: action.payload,
      };
    case CANDIDATE_ACTIONS.type:
      return {
        ...state,
        type: action.payload,
      };
    default:
      throw Error("Unknown action: " + action.type);
  }
}

const CandidateModalContent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <>
      {candidateInputs.map((input) => (
        <TextField
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
            dispatch({ type: input.action, payload: e.target.value });
          }}
        />
      ))}
      {/* <BasicSelect/> */}
      <Box sx={{ minWidth: 120, marginTop: "5px" }}>
        <FormControl fullWidth>
          <InputLabel id="candidates-types" >Type *</InputLabel>
          <Select
            labelId="candidates-types"
            id="candidates-types"
            value={state.type}
            onChange={(e) => {
              dispatch({ type: "update_candidate_type", payload: e.target.value });
            }}
            label="Type *"
          >
            <MenuItem value={candidateTypes.internal}>
              {candidateTypes.internal}
            </MenuItem>
            <MenuItem value={candidateTypes.external}>
              {candidateTypes.external}
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default CandidateModalContent;
