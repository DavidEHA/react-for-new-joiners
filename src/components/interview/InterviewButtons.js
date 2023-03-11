import { useDispatch } from "react-redux";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { interviewActions } from "../../store/interview-slice";

const InterviewButtons = ({ questionNumber }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(null);
  const questions = useSelector((state) => state.interview.questions);

  useEffect(() => {
    setValue(null);
  }, [questionNumber]);

  const handleChange = (event) => {
    const answer = JSON.parse(event.target.value);
    setValue(answer);

    const question = questions.find(
      (question) => question.id === questionNumber
    );

    const comments = question?.comments || null;
    const result = {
      id: questionNumber,
      result: answer,
      comments: comments,
    };
    dispatch(interviewActions.uploadResult(result));
  };

  return (
    <>
      <FormControl>
        <RadioGroup
          aria-labelledby="radio-buttons-group"
          name="radio-buttons-group"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel value={true} control={<Radio />} label="Correct" />
          <FormControlLabel
            value={false}
            control={<Radio />}
            label="Incorrect"
          />
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default InterviewButtons;
