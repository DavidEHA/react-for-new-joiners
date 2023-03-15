import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { useParams } from "react-router-dom";

const QuestionsSelector = ({ submitAnswer }) => {
  const { id } = useParams();
  const page = parseInt(id || 1);

  return (
    <Pagination
      page={page}
      count={8}
      onClick={()=>submitAnswer({ isLastQuestion: false })}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`/question/${item.page}`}
          {...item}
        />
      )}
    />
  );
};
export default QuestionsSelector;
