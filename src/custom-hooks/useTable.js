import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { candidatesActions } from "../store/candidates-slice";
import { bottomButtonsActions } from "../store/bottom-buttons-slice";
import { sideButtonsActions } from "../store/side-buttons-slice";

export const useTable = () => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("calories");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const candidates = useSelector((state) => state.candidates.info);
  const dispatch = useDispatch();

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  // Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
  // stableSort() brings sort stability to non-modern browsers (notably IE11). If you
  // only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
  // with exampleArray.slice().sort(exampleComparator)
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleClick = (event, id) => {
    setSelected((prevValue) => {
      if (prevValue === id) {
        dispatch(bottomButtonsActions.toggleRightButtonDisabled(true));
        dispatch(sideButtonsActions.toggleShowSideButtons(false));
        dispatch(candidatesActions.selectCandidate(null));
        return null;
      }
      dispatch(bottomButtonsActions.toggleRightButtonDisabled(false));
      dispatch(sideButtonsActions.toggleShowSideButtons(true));
      dispatch(candidatesActions.selectCandidate(id));
      return id;
    });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => id === selected;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - candidates.length) : 0;

  return {
    candidates,
    page,
    rowsPerPage,
    emptyRows,
    order,
    orderBy,
    getComparator,
    stableSort,
    handleRequestSort,
    handleClick,
    isSelected,
    handleChangePage,
    handleChangeRowsPerPage,
  };
};
