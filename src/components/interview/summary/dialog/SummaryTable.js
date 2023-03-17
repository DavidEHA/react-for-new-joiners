import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Dialog } from "@mui/material";
import { StyledTableCell, StyledTableRow } from "./styles";

function createData(question, answer, comments) {
  return { question, answer, comments };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0),
  createData("Ice cream sandwich", 237, 9.0),
];

const SummaryTable = ({ handleClose, open }) => {
  return (
    <Dialog maxWidth="lg" onClose={handleClose} open={open}>
      <TableContainer sx={{ minWidth: "1000px" }} component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Question</StyledTableCell>
              <StyledTableCell>Answer</StyledTableCell>
              <StyledTableCell>Comments</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.question}>
                <StyledTableCell component="th" scope="row">
                  {row.question}
                </StyledTableCell>
                <StyledTableCell>{row.answer}</StyledTableCell>
                <StyledTableCell>{row.comments}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Dialog>
  );
};

export default SummaryTable;
