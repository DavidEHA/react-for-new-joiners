import { interviewersActions } from "./interviewers-slice";
import { candidatesActions } from "./candidates-slice";
import { USER_ROLES } from "../utils/pages";

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
      if (storeData.interviewers) {
        dispatch(
          interviewersActions.replaceInterviewers({
            info: storeData.interviewers.info || [],
            interviewerSelected:
              storeData.interviewers.interviewerSelected || null,
          })
        );
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
            candidateSelected: storeData.candidates.candidateSelected || null,
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
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
