import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const InterviewComments = ({ comments, updateComment }) => {
  const { id } = useParams();
  const questions = useSelector((state) => state.interview.questions);
  const question = questions.find((question) => question.id === id);

  useEffect(() => {
    if (question?.comments === undefined) return;
    if (comments !== null) return;
    updateComment(question.comments);
  }, [comments, updateComment, id, questions, question]);

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 5, width: "23rem" },
      }}
    >
      <TextField
        id="outlined-multiline-static"
        label="Comments"
        multiline
        rows={4}
        placeholder="..."
        value={comments || ""}
        onChange={(event) => {
          updateComment(event.target.value);
        }}
      />
    </Box>
  );
};
export default InterviewComments;
