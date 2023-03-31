import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Dialog } from "@mui/material";
import { StyledTableCell, StyledTableRow } from "./styles";
import { useSelector } from "react-redux";

const SummaryTable = ({ handleClose, open }) => {
  const candidateSelected = useSelector(
    (state) => state.candidates.candidateSelected
  );
  const candidates = useSelector((state) => state.candidates.info);
  const candidate = candidates.find(
    (candidate) => candidate.id === candidateSelected
  );
  const questions = candidate.interviewSummary;

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
            {questions.map((question) => (
              <StyledTableRow key={question.question}>
                <StyledTableCell component="th" scope="row">
                  {question.question}
                </StyledTableCell>
                <StyledTableCell>
                  <div
                    style={
                      question.answer ? { color: "green" } : { color: "red" }
                    }
                  >
                    <i>{question.answer ? "Correct" : "Incorrect"} </i>
                  </div>
                </StyledTableCell>
                <StyledTableCell>{question.comments}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Dialog>
  );
};

export default SummaryTable;
