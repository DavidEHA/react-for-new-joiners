import { useSelector } from "react-redux";
import { USER_ROLES } from "../utils/pages";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { modalActions } from "../store/modal-slice";

export const useListController = () => {
  const dispatch = useDispatch();
  const showInputsFor = useSelector((state) => state.modal.userType);
  console.log(showInputsFor, USER_ROLES);

  const addUser = useCallback(() => {
    dispatch(modalActions.toggleOpenModal(true));
  }, [dispatch]);

  return { addUser };
};
