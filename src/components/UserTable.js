import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Full name", width: 300 },
  {
    field: "eMail",
    headerName: "Email",
    width: 300,
  },
  {
    field: "type",
    headerName: "Type of user",
    width: 200,
  },
  {
    field: "candidateInfo",
    headerName: "Candidate Info",
    width: 200,
  },
];

export default function DataTable() {
  const candidates = useSelector((state) => state.candidates.info);

  return (
    <div className="candidates-table">
      <DataGrid
        rows={candidates}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
