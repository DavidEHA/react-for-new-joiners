import { useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { pagesActions } from "../store/pages-slice";
import { pages } from "../utils/pages";
import { useDispatch } from "react-redux";
import { bottomButtonsActions } from "../store/bottom-buttons-slice";
import { headerActions } from "../store/header-slice";
import { modalActions } from "../store/modal-slice";
import { sideButtonsActions } from "../store/side-buttons-slice";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { useInterview } from "../components/interview/useInterview";

export const usePageController = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pageIndex = useSelector((state) => state.pages.pageIndex);
  const candidates = useSelector((state) => state.candidates.info);
  const { id } = useParams();
  const { readyToSubmit, submitAnswer } = useInterview({src:"PageController"});


  const updatePageData = useCallback(
    (index) => {
      if (index === 1 && id !== undefined) return navigate("/");
      if (index === 4 && id === undefined) return navigate(`/question/${1}`);
      dispatch(
        bottomButtonsActions.changeRightButtonTitle(
          pages[index].ui.bottomButtons.rightButtonTitle
        )
      );
      dispatch(modalActions.changeUserType(pages[index].ui.showViewFor));
      dispatch(
        bottomButtonsActions.toggleRightButtonDisabled(
          pages[index].ui.bottomButtons.rightButtonDisabled
        )
      );
      dispatch(
        bottomButtonsActions.toggleShowLeftButton(
          pages[index].ui.bottomButtons.showLeftButton
        )
      );
      dispatch(
        bottomButtonsActions.toggleShowRightButton(
          pages[index].ui.bottomButtons.showRightButton
        )
      );
      dispatch(
        bottomButtonsActions.toggleShowRightButtonIcon(
          pages[index].ui.bottomButtons.showRightButtonIcon
        )
      );
      dispatch(
        sideButtonsActions.toggleShowSideButtons(
          pages[index].ui.sideButtons.showSideButtons
        )
      );
      dispatch(headerActions.replaceHeader(pages[index].ui.header.title));
      dispatch(pagesActions.changePage(pages[index]));
    },
    [dispatch, id, navigate]
  );

  useEffect(() => {
    updatePageData(pageIndex);
  }, [pageIndex, updatePageData]);

  const nextPage = useCallback(() => {
    let incrementIndex = pageIndex + 1;
    if (candidates.length > 0 && incrementIndex === 2) {
      incrementIndex = 3;
    }

    if (readyToSubmit) {
      submitAnswer(); 
      incrementIndex = 1;
    }

    if (incrementIndex >= pages.length) {
      incrementIndex = pages.length - 1;
    }
    dispatch(pagesActions.changePageIndex(incrementIndex));
    updatePageData(incrementIndex);
  }, [
    pageIndex,
    dispatch,
    candidates,
    submitAnswer,
    readyToSubmit,
    updatePageData,
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
    updatePageData(decrementIndex);
  }, [pageIndex, dispatch, updatePageData]);

  return { nextPage, prevPage };
};
