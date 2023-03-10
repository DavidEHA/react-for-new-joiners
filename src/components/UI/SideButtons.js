import { useSelector } from "react-redux";
import { Fab } from "@mui/material";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import { EditOutlined } from "@mui/icons-material";
import { DeleteOutline } from "@mui/icons-material";
import { useListController } from "../../custom-hooks/useListController";

const SideButtons = () => {
  const { addUser, deleteUser } = useListController();
  const showSideButtons = useSelector(
    (state) => state.sideButtons.showSideButtons
  );

  return (
    <div className="side-buttons">
      <Fab
        title={"Add user"}
        color="primary"
        style={{ marginBottom: "15px" }}
        onClick={addUser}
      >
        <PersonAddOutlinedIcon />
      </Fab>
      {showSideButtons && (
        <>
          <Fab
            title={"Edit user"}
            color="primary"
            style={{ marginBottom: "15px" }}
          >
            <EditOutlined />
          </Fab>
          <Fab
            title={"Delete user"}
            color="primary"
            style={{ marginBottom: "15px" }}
            onClick={deleteUser}
          >
            <DeleteOutline />
          </Fab>
        </>
      )}
    </div>
  );
};

export default SideButtons;
