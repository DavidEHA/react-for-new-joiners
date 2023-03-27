import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTable } from "../../custom-hooks/useTable";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Button from "@mui/material/Button";
import TableHeader from "./TableHeader";

export default function UserTable() {
  const {
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
  } = useTable();

  return (
    <div className="candidates-table">
      <Box sx={{ height: "30rem" }}>
        <Paper sx={{ height: "30rem" }}>
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size="medium"
            >
              <TableHeader
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
              />
              <TableBody>
                {stableSort(candidates, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((candidate, index) => {
                    const isItemSelected = isSelected(candidate.id);
                    const labelId = `enhanced-table-checkbox-${index}`;
                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, candidate.id)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={candidate.id}
                        selected={isItemSelected}
                        sx={{ cursor: "pointer" }}
                      >
                        <TableCell component="th" id={labelId}>
                          {candidate.id}
                        </TableCell>
                        <TableCell>{candidate.name}</TableCell>
                        <TableCell>{candidate.email}</TableCell>
                        <TableCell>{candidate.type}</TableCell>
                        <TableCell>
                          <Button variant="contained">
                            See more{" "}
                            <PermIdentityIcon
                              style={{
                                marginLeft: "8px",
                                width: "20px",
                                marginBottom: "2px",
                              }}
                            />{" "}
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 53 * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              minHeight: "22rem",
            }}
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={candidates.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </div>
  );
}
