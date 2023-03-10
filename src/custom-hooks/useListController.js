import { useSelector } from "react-redux";
import { USER_ROLES } from "../utils/pages";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { modalActions } from "../store/modal-slice";
import { interviewersActions } from "../store/interviewers-slice";
import { pagesActions } from "../store/pages-slice";
import { candidatesActions } from "../store/candidates-slice";

export const useListController = () => {
  const dispatch = useDispatch();
  const interviewers = useSelector((state) => state.interviewers.info);
  const candidates = useSelector((state) => state.candidates.info);
  const showInputsFor = useSelector((state) => state.modal.userType);
  const interviewerSelected = useSelector(
    (state) => state.interviewers.interviewerSelected
  );
  const candidateSelected = useSelector(
    (state) => state.candidates.candidateSelected
  );

  const addUser = useCallback(() => {
    dispatch(modalActions.toggleOpenModal(true));
  }, [dispatch]);

  const deleteUser = useCallback(() => {
    if (showInputsFor === USER_ROLES.interviewer) {
      if (interviewers.length <= 1) {
        dispatch(pagesActions.changePageIndex(0));
      }
      dispatch(
        interviewersActions.removeUserFromInterviewers(interviewerSelected)
      );
    }
    if (showInputsFor === USER_ROLES.candidate) {
      if (candidates.length <= 1) {
        dispatch(pagesActions.changePageIndex(2));
      }
      dispatch(candidatesActions.removeUserFromCandidates(candidateSelected));
    }
  }, [
    dispatch,
    showInputsFor,
    interviewerSelected,
    interviewers,
    candidates,
    candidateSelected,
  ]);

  const editUser = useCallback(() => {
    dispatch(modalActions.toggleOpenModal(true));
    dispatch(modalActions.toggleEdit(true));
  }, [dispatch]);

  return { addUser, deleteUser, editUser };
};
