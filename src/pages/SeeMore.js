import CandidateDetails from "../components/interview/see-more/CandidateDetails";
import CandidateSkills from "../components/interview/see-more/candidate-skills/CandidateSkills";
import { useSelector } from "react-redux";

const SeeMore = () => {
  const pageIndex = useSelector((state) => state.pages.pageIndex);

  return (
    <>
      {pageIndex === 6 && (
        <div className="see-more-container">
          <CandidateDetails />
          <CandidateSkills />
        </div>
      )}
    </>
  );
};

export default SeeMore;
