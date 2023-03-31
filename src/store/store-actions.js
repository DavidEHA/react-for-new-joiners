import { interviewersActions } from "./interviewers-slice";
import { candidatesActions } from "./candidates-slice";
import { USER_ROLES } from "../utils/pages";
import { pagesActions } from "./pages-slice";
import { dataBaseActions } from "./data-base-slice";
import { pages } from "../utils/pages";
import { bottomButtonsActions } from "../store/bottom-buttons-slice";
import { headerActions } from "../store/header-slice";
import { modalActions } from "../store/modal-slice";
import { sideButtonsActions } from "../store/side-buttons-slice";

export const fetchPageData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-for-new-joiners-default-rtdb.firebaseio.com/store.json"
      );
      if (!response.ok) {
        throw new Error("Could not fetch page data!");
      }
      const data = await response.json();
      return data;
    };

    try {
      const storeData = await fetchData();
      if (storeData !== null) {
        if (storeData.interviewers) {
          dispatch(
            interviewersActions.replaceInterviewers({
              info: storeData.interviewers.info || [],
              interviewerSelected: storeData.interviewers.interviewerSelected,
            })
          );

          let index = 0;
          if (storeData.interviewers.info.length > 0) {
            index = 1;
            dispatch(pagesActions.changePageIndex(index));
          }
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

          if (storeData.interviewers.interviewerSelected !== "") {
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
        }

        if (storeData.candidates) {
          const candidates = storeData.candidates.info.map((candidate) => {
            if (candidate.interviewSummary === undefined) {
              candidate.interviewSummary = [];
            }
            if (candidate.skills === undefined) {
              candidate.skills = [];
            }
            return candidate;
          });

          dispatch(
            candidatesActions.replaceCandidates({
              info: candidates || [],
              candidateSelected: storeData.candidates.candidateSelected,
            })
          );
        }
      }
    } catch (error) {
      console.log(error);
    }
    dispatch(dataBaseActions.setInitialized(true));
  };
};

export const sendPageData = ({ data, type }) => {
  return async () => {
    console.log("Sending...");
    let methodConfig = {};
    let dataBaseUrl = "";
    if (type === USER_ROLES.interviewer) {
      dataBaseUrl =
        "https://react-for-new-joiners-default-rtdb.firebaseio.com/store/interviewers.json";
      methodConfig = {
        method: "PUT",
        body: JSON.stringify({
          info: data.info,
          interviewerSelected: data.interviewerSelected,
        }),
      };
    }
    if (type === USER_ROLES.candidate) {
      dataBaseUrl =
        "https://react-for-new-joiners-default-rtdb.firebaseio.com/store/candidates.json";
      methodConfig = {
        method: "PUT",
        body: JSON.stringify({
          info: data.info,
          candidateSelected: data.candidateSelected,
        }),
      };
    }

    const sendRequest = async () => {
      const response = await fetch(dataBaseUrl, methodConfig);

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();
      console.log("Success!");
    } catch (error) {
      console.log(error);
    }
  };
};
