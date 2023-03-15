import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const InterviewButtons = ({ isCorrect, updateAnswer }) => {
  const { id } = useParams();
  const questions = useSelector((state) => state.interview.questions);
  const question = questions.find((question) => question.id === id);

  useEffect(() => {
    if (question?.answer === undefined) return;
    if (isCorrect !== null) return;
    updateAnswer(question.answer);
  }, [isCorrect, updateAnswer, id, question]);

  return (
    <>
      <FormControl>
        <RadioGroup
          aria-labelledby="radio-buttons-group"
          name="radio-buttons-group"
          value={isCorrect}
          onChange={(event) => updateAnswer(event.target.value)}
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
