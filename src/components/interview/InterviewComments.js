import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const InterviewComments = () => {
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
      />
    </Box>
  );
};
export default InterviewComments;
