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

// const rows = [
//   { id: 1, email: "Snow", typeOfUser: "Jon", age: 35 },
// ];

export default function DataTable() {
  const candidates = useSelector((state) => state.candidates.info);
console.log(candidates)

const rows = candidates

  return (
    <div className="candidates-table">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
