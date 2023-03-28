import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { candidatesActions } from "../../../store/candidates-slice";

const GeneralComments = () => {
  const candidateSelected = useSelector(
    (state) => state.candidates.candidateSelected
  );
  const candidates = useSelector((state) => state.candidates.info);
  const candidate = candidates.find(
    (candidate) => candidate.id === candidateSelected
  );
  const interviewComments = candidate.interviewComments;
  const dispatch = useDispatch();

  const updateComment = (comments) => {
    dispatch(
      candidatesActions.addInterviewComments({
        id: candidate.id,
        comments: comments,
      })
    );
  };

  return (
    <div className="general-comments">
      <Typography sx={{ fontSize: 18 }} color="text.primary">
        Comments For This Interview
      </Typography>
      <hr style={{ width: "100%", marginBottom: "1.5rem" }} />
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { marginBottom: "1rem", width: "60%" },
        }}
      >
        <TextField
          id="outlined-multiline-static"
          label="Comments"
          multiline
          rows={4}
          placeholder="..."
          value={interviewComments || ""}
          onChange={(event) => {
            updateComment(event.target.value);
          }}
        />
      </Box>
    </div>
  );
};

export default GeneralComments;
