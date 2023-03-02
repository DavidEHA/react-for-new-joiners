import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import { Fab } from "@mui/material";

const RegistrationContent = () => {
  let userType = "candidate";

  return (
    <>
      <p style={{ marginBottom: "15px" }}>No {userType} has been registred</p>
      <Fab
        title={`Add ${userType}`}
        color="primary"
        // onClick={handleClickOpen}
        style={{ marginBottom: "10px" }}
      >
        <PersonAddOutlinedIcon />
      </Fab>
      <i style={{ fontSize: 10 }}>Click here to add</i>
    </>
  );
};

export default RegistrationContent;
