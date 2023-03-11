import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useEffect, useState } from "react";

export const InterviewButtons = ({ questionNumber }) => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    setValue(null);
  }, [questionNumber]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="radio-buttons-group"
        name="radio-buttons-group"
        value={value}
        onChange={handleChange}
        row
      >
        <FormControlLabel value={true} control={<Radio />} label="Correct" />
        <FormControlLabel value={false} control={<Radio />} label="Incorrect" />
      </RadioGroup>
    </FormControl>
  );
};
