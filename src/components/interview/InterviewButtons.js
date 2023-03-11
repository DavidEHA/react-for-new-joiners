import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useEffect, useState } from "react";

export const InterviewButtons = ({ questionNumber }) => {
  const [checked, setChecked] = useState(false);
  const [change, setChange] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) return setInitialized(true);
    setChange(false);
  }, [questionNumber, initialized]);

  const handleOnClick = () => {
    console.log()
    setChange(true);
    setChecked((prevState) => {
      return !prevState;
    });
  };

  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          value={true}
          onClick={handleOnClick}
          control={<Radio />}
          label="Correct"
          checked={(!change && false) || (change && checked)}
        />
        <FormControlLabel
          value={false}
          checked={(!change && false) || (change && !checked)}
          onClick={handleOnClick}
          control={<Radio />}
          label="Incorrect"
        />
      </RadioGroup>
    </FormControl>
  );
};
