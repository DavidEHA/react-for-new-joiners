import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export const InterviewButtons = () => {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          value={true}
          onClick={() => {
            console.log(true);
          }}
          control={<Radio />}
          label="Correct"
        />
        <FormControlLabel
          value={false}
          onClick={() => {
            console.log(false);
          }}
          control={<Radio />}
          label="Incorrect"
        />
      </RadioGroup>
    </FormControl>
  );
};
