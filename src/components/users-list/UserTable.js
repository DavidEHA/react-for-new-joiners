import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { candidatesActions } from "../../store/candidates-slice";
import { useDispatch } from "react-redux";
import { bottomButtonsActions } from "../../store/bottom-buttons-slice";
import { columns } from "../../utils/inputs-list";
import { sideButtonsActions } from "../../store/side-buttons-slice";

export default function DataTable() {
  const dispatch = useDispatch();
  const candidates = useSelector((state) => state.candidates.info);

  const handleRowSelection = (rowSelected) => {
    if (rowSelected.length > 0) {
      dispatch(bottomButtonsActions.toggleRightButtonDisabled(false));
      dispatch(sideButtonsActions.toggleShowSideButtons(true));
      dispatch(candidatesActions.selectCandidate(rowSelected[0]));
      return;
    }
    dispatch(bottomButtonsActions.toggleRightButtonDisabled(true));
    dispatch(sideButtonsActions.toggleShowSideButtons(false));
    dispatch(candidatesActions.selectCandidate(null));
  };

  return (
    <div className="candidates-table">
      <DataGrid
        rows={candidates}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onRowSelectionModelChange={(rowSelected) => {
          handleRowSelection(rowSelected);
        }}
      />
    </div>
  );
}
