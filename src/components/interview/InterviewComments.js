import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const InterviewComments = ({ comments, updateComment, question }) => {
  const { id } = useParams();

  useEffect(() => {
    if (question?.comments === undefined) return;
    if (comments !== null) return;
    updateComment(question.comments, true);
  }, [comments, updateComment, id, question]);

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
          updateComment(event.target.value, false);
        }}
      />
    </Box>
  );
};
export default InterviewComments;
