import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import { Fab } from "@mui/material";
import { useDispatch } from 'react-redux';
import { modalActions } from "../../store/modal-slice";
import { useSelector } from "react-redux";



const RegistrationContent = () => {
  const userType = useSelector((state) => state.modal.userType);
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(modalActions.toggleOpenModal(true));
  };

  return (
    <>
      <p style={{ marginBottom: "15px" }}>No {userType} has been registred</p>
      <Fab
        title={`Add ${userType}`}
        color="primary"
        style={{ marginBottom: "10px" }}
        onClick={openModal}
      >
        <PersonAddOutlinedIcon />
      </Fab>
      <i style={{ fontSize: 10 }}>Click here to add</i>
    </>
  );
};

export default RegistrationContent;
