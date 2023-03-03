export const CANDIDATE_ACTIONS = {
  name: "update_candidate_name",
  eMail: "update_candidate_email",
  type: "update_candidate_type",
};

export const INTERVIEWER_ACTIONS = {
  name: "update_interviewer_name",
  id: "update_interviewer_id",
  eid: "update_interviewer_eid",
};

export const GENERAL_ACTIONS = {
  reset: "reset",
};

export function modalReducer(state, action) {
  switch (action.type) {
    case INTERVIEWER_ACTIONS.name:
      return {
        ...state,
        name: action.payload,
      };
    case INTERVIEWER_ACTIONS.id:
      return {
        ...state,
        id: action.payload,
      };
    case INTERVIEWER_ACTIONS.eid:
      return {
        ...state,
        eid: action.payload,
      };
    case CANDIDATE_ACTIONS.name:
      return {
        ...state,
        name: action.payload,
      };
    case CANDIDATE_ACTIONS.eMail:
      return {
        ...state,
        eMail: action.payload,
      };
    case CANDIDATE_ACTIONS.type:
      return {
        ...state,
        type: action.payload,
      };
    case GENERAL_ACTIONS.reset:
      return {
        state: {},
      };
    default:
      throw Error("Unknown action: " + action.type);
  }
}
