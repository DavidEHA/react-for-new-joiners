import { useSelector } from "react-redux";
import { USER_ROLES } from "../utils/pages";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { modalActions } from "../store/modal-slice";
import { interviewersActions } from "../store/interviewers-slice";
import { candidatesActions } from "../store/candidates-slice";
import { updatePagesStates } from "../store/pages-actions";
import { usePageActions } from "./usePageActions";

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
  const { pageId, navigate } = usePageActions();

  const addUser = useCallback(() => {
    dispatch(modalActions.toggleOpenModal(true));
  }, [dispatch]);

  const deleteUser = useCallback(() => {
    if (showInputsFor === USER_ROLES.interviewer) {
      if (interviewers.length <= 1) {
        dispatch(
          updatePagesStates(
            0,
            pageId,
            candidateSelected,
            interviewerSelected,
            navigate
          )
        );
      }
      dispatch(
        interviewersActions.removeUserFromInterviewers(interviewerSelected)
      );
    }
    if (showInputsFor === USER_ROLES.candidate) {
      if (candidates.length <= 1) {
        dispatch(
          updatePagesStates(
            2,
            pageId,
            candidateSelected,
            interviewerSelected,
            navigate
          )
        );
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
    pageId,
    navigate,
  ]);

  const editUser = useCallback(() => {
    dispatch(modalActions.toggleOpenModal(true));
    dispatch(modalActions.toggleEdit(true));
  }, [dispatch]);

  return { addUser, deleteUser, editUser };
};
