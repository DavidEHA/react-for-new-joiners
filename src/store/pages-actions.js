import { pagesActions } from "../store/pages-slice";
import { pages } from "../utils/pages";
import { bottomButtonsActions } from "../store/bottom-buttons-slice";
import { headerActions } from "../store/header-slice";
import { modalActions } from "../store/modal-slice";
import { sideButtonsActions } from "../store/side-buttons-slice";

export const updatePagesStates = (
  index,
  pageId,
  candidateSelected,
  interviewerSelected,
  navigate
) => {
  return async (dispatch) => {
    dispatch(pagesActions.changePageIndex(index));
    dispatch(
      bottomButtonsActions.changeRightButtonTitle(
        pages[index].ui.bottomButtons.rightButtonTitle
      )
    );
    dispatch(modalActions.changeUserType(pages[index].ui.showViewFor));
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
    dispatch(headerActions.replaceHeader(pages[index].ui.header.title));

    if (
      ((candidateSelected !== "" && candidateSelected !== null && index === 3) ||
        (interviewerSelected !== "" && interviewerSelected !== null && index === 1))
    ) {
      dispatch(bottomButtonsActions.toggleRightButtonDisabled(false));
      dispatch(sideButtonsActions.toggleShowSideButtons(true));
    } else {
      dispatch(
        bottomButtonsActions.toggleRightButtonDisabled(
          pages[index].ui.bottomButtons.rightButtonDisabled
        )
      );
      dispatch(
        sideButtonsActions.toggleShowSideButtons(
          pages[index].ui.sideButtons.showSideButtons
        )
      );
    }
    if (index === 4 && pageId === undefined) return navigate(`/question/${1}`);
    if (index === 5 && pageId !== undefined) return navigate("/");
  };
};
