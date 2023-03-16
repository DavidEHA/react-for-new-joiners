import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import { useParams } from "react-router-dom";
// import { useEffect } from "react";
// import { useSelector } from "react-redux";

const GeneralComments = () => {

  const generalComments = ""

  return (
    <div className="general-comments">
      <Typography sx={{ fontSize: 18 }} color="text.primary">
        Comments For This Interview
      </Typography>
      <hr style={{ width: "100%", marginBottom: "1.5rem" }} />
      <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { marginBottom:"1rem", width: "60%" },
      }}
    >
      <TextField
        id="outlined-multiline-static"
        label="Comments"
        multiline
        rows={4}
        placeholder="..."
        value={generalComments || ""}
        onChange={(event) => {
          // updateComment(event.target.value, false);
        }}
      />
    </Box>
    </div>
  );
};

export default GeneralComments;
