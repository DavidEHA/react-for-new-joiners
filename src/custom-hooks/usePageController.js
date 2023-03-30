import { useCallback } from "react";
import { useSelector } from "react-redux";
import { pagesActions } from "../store/pages-slice";
import { pages } from "../utils/pages";
import { useDispatch } from "react-redux";
import { updatePagesStates } from "../store/pages-actions";
import { usePageActions } from "./usePageActions";

export const usePageController = () => {
  const dispatch = useDispatch();
  const pageIndex = useSelector((state) => state.pages.pageIndex);
  const candidates = useSelector((state) => state.candidates.info);
  const {
    pageId,
    candidateSelected,
    interviewerSelected,
    navigate,
  } = usePageActions();

  const nextPage = useCallback(() => {
    let incrementIndex = pageIndex + 1;
    if (incrementIndex === 6) {
      incrementIndex = 1;
    }
    if (incrementIndex === 7) {
      incrementIndex = 3;
    }
    if (candidates.length > 0 && incrementIndex === 2) {
      incrementIndex = 3;
    }
    if (incrementIndex >= pages.length) {
      incrementIndex = pages.length - 1;
    }
    if (pageId !== undefined) incrementIndex = 5;

    dispatch(pagesActions.changePageIndex(incrementIndex));
    dispatch(
      updatePagesStates(
        incrementIndex,
        pageId,
        candidateSelected,
        interviewerSelected,
        navigate
      )
    );
  }, [
    pageIndex,
    dispatch,
    candidates,
    pageId,
    candidateSelected,
    interviewerSelected,
    navigate,
  ]);

  const prevPage = useCallback(() => {
    let decrementIndex = pageIndex - 1;
    if (decrementIndex === 2) {
      decrementIndex = 1;
    }
    if (decrementIndex <= 1) {
      decrementIndex = 1;
    }
    dispatch(pagesActions.changePageIndex(decrementIndex));
    dispatch(
      updatePagesStates(
        decrementIndex,
        pageId,
        candidateSelected,
        interviewerSelected,
        navigate
      )
    );
  }, [
    pageIndex,
    dispatch,
    pageId,
    candidateSelected,
    interviewerSelected,
    navigate,
  ]);

  return { nextPage, prevPage };
};
