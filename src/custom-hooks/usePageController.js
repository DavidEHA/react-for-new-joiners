import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { pagesActions } from "../store/pages-slice";
import { pages } from "../utils/pages";
import { useDispatch } from "react-redux";
import { bottomButtonsActions } from "../store/bottom-buttons-slice";
import { headerActions } from "../store/header-slice";
import { modalActions } from "../store/modal-slice";
import { sideButtonsActions } from "../store/side-buttons-slice";

export const usePageController = () => {
  const [ready, setReady] = useState(false);
  const dispatch = useDispatch();
  const pagesInfo = useSelector((state) => state.pages.info);
  const pageIndex = useSelector((state) => state.pages.pageIndex);
  const candidates = useSelector((state) => state.candidates.info);

  const nextPage = useCallback(() => {
    let incrementIndex = pageIndex + 1;
    if (candidates.length > 0 && incrementIndex === 2) {
      incrementIndex = 3;
    }
    if (incrementIndex >= pages.length) {
      incrementIndex = pages.length - 1;
    }
    dispatch(pagesActions.changePageIndex(incrementIndex));
  }, [pageIndex, dispatch, candidates]);

  const prevPage = useCallback(() => {
    let decrementIndex = pageIndex - 1;
    if (decrementIndex === 2) {
      decrementIndex = 1;
    }
    if (decrementIndex <= 1) {
      decrementIndex = 1;
    }
    dispatch(pagesActions.changePageIndex(decrementIndex));
  }, [pageIndex, dispatch]);

  useEffect(() => {
    dispatch(
      bottomButtonsActions.changeRightButtonTitle(
        pages[pageIndex].ui.bottomButtons.rightButtonTitle
      )
    );
    dispatch(modalActions.changeUserType(pages[pageIndex].ui.showViewFor));
    dispatch(
      bottomButtonsActions.toggleRightButtonDisabled(
        pages[pageIndex].ui.bottomButtons.rightButtonDisabled
      )
    );
    dispatch(
      bottomButtonsActions.toggleShowLeftButton(
        pages[pageIndex].ui.bottomButtons.showLeftButton
      )
    );
    dispatch(
      bottomButtonsActions.toggleShowRightButton(
        pages[pageIndex].ui.bottomButtons.showRightButton
      )
    );
    dispatch(
      bottomButtonsActions.toggleShowRightButtonIcon(
        pages[pageIndex].ui.bottomButtons.showRightButtonIcon
      )
    );
    dispatch(
      sideButtonsActions.toggleShowSideButtons(
        pages[pageIndex].ui.sideButtons.showSideButtons
      )
    );
    dispatch(headerActions.replaceHeader(pages[pageIndex].ui.header.title));
    dispatch(pagesActions.changePage(pages[pageIndex]));
  }, [dispatch, pageIndex]);

  useEffect(() => {
    if (pagesInfo === pages[pageIndex]) {
      setReady(true);
      return;
    }
    setReady(false);
  }, [pagesInfo, pageIndex]);

  return { ready, nextPage, prevPage };
};
