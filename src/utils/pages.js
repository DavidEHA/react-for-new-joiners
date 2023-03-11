export const USER_ROLES = {
  interviewer: "interviewer",
  candidate: "candidate",
};

export const PAGE_NAME = {
  interviewersRegistration: "interviewers_registration",
  interviewersList: "interviewers_list",
  candidateRegistration: "candidate_registration",
  candidateList: "candidate_list",
  interviewQuestions: "interview_questions",
};

export const PAGE_TITLE = {
  interviewersDashboard: "Interviewers Dashboard",
  candidatesDashboard: "Candidates Dashboard",
  interviewQuestions: "Interview Questions",
  summaryOfTheInterview: "Summary of the Interview",
};

export const RIGHT_BUTTON_NAME = {
  continue: "Continue",
  finalize: "Finalize",
};

export const pages = [
  {
    key: 0,
    name: PAGE_NAME.interviewersRegistration,
    ui: {
      header: { title: PAGE_TITLE.interviewersDashboard },
      showViewFor: USER_ROLES.interviewer,
      bottomButtons: {
        rightButtonDisabled: true,
        rightButtonTitle: RIGHT_BUTTON_NAME.continue,
        showRightButton: false,
        showRightButtonIcon: true,
        showLeftButton: false,
      },
      sideButtons: { showSideButtons: false },
    },
  },
  {
    key: 1,
    name: PAGE_NAME.interviewersList,
    ui: {
      header: { title: PAGE_TITLE.interviewersDashboard },
      showViewFor: USER_ROLES.interviewer,
      bottomButtons: {
        rightButtonDisabled: true,
        rightButtonTitle: RIGHT_BUTTON_NAME.continue,
        showRightButton: true,
        showRightButtonIcon: true,
        showLeftButton: false,
      },
      sideButtons: { showSideButtons: false },
    },
  },
  {
    key: 2,
    name: PAGE_NAME.candidateRegistration,
    ui: {
      header: { title: PAGE_TITLE.candidatesDashboard },
      showViewFor: USER_ROLES.candidate,
      bottomButtons: {
        rightButtonDisabled: false,
        rightButtonTitle: RIGHT_BUTTON_NAME.continue,
        showRightButton: false,
        showRightButtonIcon: true,
        showLeftButton: true,
      },
      sideButtons: { showSideButtons: false },
    },
  },
  {
    key: 3,
    name: PAGE_NAME.candidateList,
    ui: {
      header: { title: PAGE_TITLE.candidatesDashboard },
      showViewFor: USER_ROLES.candidate,
      bottomButtons: {
        rightButtonDisabled: true,
        rightButtonTitle: RIGHT_BUTTON_NAME.continue,
        showRightButton: true,
        showRightButtonIcon: true,
        showLeftButton: true,
      },
      sideButtons: { showSideButtons: false },
    },
  },
  {
    key: 4,
    name: PAGE_NAME.interviewQuestions,
    ui: {
      header: { title: PAGE_TITLE.interviewQuestions },
      showViewFor: USER_ROLES.candidate,
      bottomButtons: {
        rightButtonDisabled: true,
        rightButtonTitle: RIGHT_BUTTON_NAME.finalize,
        showRightButton: true,
        showRightButtonIcon: false,
        showLeftButton: false,
      },
      sideButtons: { showSideButtons: false },
    },
  },
];
