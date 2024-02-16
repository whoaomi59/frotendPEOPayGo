import {
  Button,
  ButtonGroup,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import ConterDefaull from "./conterDefaul";
import { Rating } from "primereact/rating";
import { classNames } from "primereact/utils";

import Top from "./top";
import Grid from "./grid";
export default function Tables({ data }: any) {
  const [table, setTable] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset page to 0 when changing rows per page
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  return (
    <ConterDefaull>
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button
          onClick={() => setTable(true)}
          style={{ background: "#0834AB" }}
        >
          <FormatListBulletedIcon />
        </Button>
        <Button
          onClick={() => setTable(false)}
          style={{ background: "#0834AB" }}
        >
          <DashboardCustomizeIcon />
        </Button>
      </ButtonGroup>

      {table ? (
        <Grid>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>img</TableCell>
                    {Object.keys(data[0]).map(
                      (key) =>
                        key !== "img" && <TableCell key={key}>{key}</TableCell>
                    )}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage > 0
                    ? data.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : data
                  ).map((item) => (
                    <TableRow key={item.id}>
                      <TableCell key={item.id}>
                        {item.img && (
                          <img
                            className="h-12 w-12 flex-none rounded-full bg-gray-50"
                            src={item.img}
                            alt=""
                          />
                        )}
                      </TableCell>

                      {Object.entries(item).map(
                        ([key, value]) =>
                          key !== "img" && (
                            <TableCell key={value}>{value}</TableCell>
                          )
                      )}
                    </TableRow>
                  ))}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableContainer>
          </Paper>
        </Grid>
      ) : (
        <ul role="list" className="divide-y divide-gray-100">
          {data.map((item: any, index: any) => (
            <li key={item.id} className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                {item.img && (
                  <img
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                    src={item.img}
                    alt=""
                  />
                )}
                <div className="min-w-0 flex-auto">
                  {Object.entries(item).map(
                    ([key, value]) =>
                      key !== "id" &&
                      key !== "img" && ( // Exclude 'image' field, which we've already handled above
                        <p
                          key={key}
                          className="text-sm font-semibold leading-6 text-gray-900"
                        >
                          {value}
                        </p>
                      )
                  )}
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                {item.id && (
                  <p className="text-sm leading-6 text-gray-900">{item.id}</p>
                )}

                {item.lastSeen ? (
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Last seen <time dateTime={item.lastSeenDateTime}>sapo</time>
                  </p>
                ) : (
                  <div className="mt-1 flex items-center gap-x-1.5">
                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-xs leading-5 text-gray-500">Online</p>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </ConterDefaull>
  );
}
