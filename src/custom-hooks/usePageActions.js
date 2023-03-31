import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const usePageActions = () => {
  const { id } = useParams();
  const pageId = id;
  const navigate = useNavigate();
  const candidateSelected = useSelector(
    (state) => state.candidates.candidateSelected
  );
  const interviewerSelected = useSelector(
    (state) => state.interviewers.interviewerSelected
  );

  return {
    pageId,
    candidateSelected,
    interviewerSelected,
    navigate,
  };
};
