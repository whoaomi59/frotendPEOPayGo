import { Button, ButtonGroup, TablePagination, TableRow } from "@mui/material";
import { useState } from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import ConterDefaull from "./conterDefaul";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/20/solid";

import Grid from "./grid";

export default function Tables({ data }: any) {
  const [table, setTable] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset page to 0 when changing rows per page
  };

  const filteredData = data?.filter((item: any) => {
    for (const key in item) {
      const value = item[key];
      if (
        value &&
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return true;
      }
    }
    return false;
  });

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  return (
    <ConterDefaull>
      <div className="px-4 py-4 ">
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
      </div>
      {table ? (
        <Grid>
          <div className="px-4 py-4 ">
            <div className="overflow-x-auto bg-white rounded shadow">
              <div className="">
                <h2 className="px-6 py-4 pb-4 text-xl font-medium border-b border-gray-300 dark:text-gray-400">
                  Usuarios
                </h2>
                <div className="flex flex-wrap items-center justify-between px-4 py-2 border-b dark:border-gray-700">
                  <div className="flex items-center pl-3">
                    <p className="text-xs text-gray-400">Show</p>
                    <div className="px-2 py-2 text-xs text-gray-500 ">
                      <select
                        name=""
                        id=""
                        className="block text-base bg-gray-100 cursor-pointer w-11 dark:text-gray-400"
                      >
                        <option value="">15</option>
                        <option value="">17</option>
                        <option value="">19</option>
                      </select>
                    </div>
                    <p className="text-xs text-gray-400">entries</p>
                  </div>
                  <div className="flex px-4 py-2 mb-4 border border-gray-300 rounded-md md:mb-0 dark:border-gray-400">
                    <input
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      type="text"
                      className="w-full pr-4 text-sm text-gray-700 bg-white dark:text-gray-400 placeholder-text-100 "
                      placeholder="search..."
                    />
                    <button className="flex items-center text-gray-700 dark:text-gray-400 dark:hover:text-blue-300 hover:text-blue-600">
                      <span className="mr-2 text-xs ">Go</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <table className="w-full table-auto">
                  <thead className="bg-gray-100">
                    <tr className="text-xs text-left text-gray-500 border-b border-gray-200 dark:border-gray-800">
                      <th className="px-6 py-3 font-medium dark:text-gray-400">
                        Actions
                      </th>
                      <th className="px-6 py-3 font-medium dark:text-gray-400">
                        img
                      </th>
                      {Object.keys(data[0]).map(
                        (key) =>
                          key !== "img" && (
                            <th
                              key={key}
                              className="px-6 py-3 font-medium dark:text-gray-400"
                            >
                              {key}
                            </th>
                          )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {(rowsPerPage > 0
                      ? filteredData.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                      : filteredData
                    ).map((item: any) => (
                      <tr key={item.id} className="border-b border-gray-200">
                        <td key={item.id} className="px-6 text-sm font-medium ">
                          <button
                            className="middle none center mr-4 flex items-center justify-center rounded-lg bg-pink-500 p-3 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            data-ripple-light="true"
                          >
                            <TrashIcon />
                          </button>
                        </td>

                        <td
                          key={item.id}
                          className="px-6 text-sm font-medium dark:text-gray-400"
                        >
                          {item.img && (
                            <img
                              className="h-12 w-12 flex-none rounded-full bg-gray-50"
                              src={item.img}
                              alt=""
                            />
                          )}
                        </td>

                        {Object.entries(item).map(
                          ([key, value]: any) =>
                            key !== "img" && (
                              <td
                                key={value}
                                className="px-6 text-sm font-medium dark:text-gray-400"
                              >
                                {value}
                              </td>
                            )
                        )}
                      </tr>
                    ))}
                    {emptyRows > 0 && (
                      <tr
                        style={{ height: 53 * emptyRows }}
                        className="border-b border-gray-200"
                      >
                        <td
                          colSpan={6}
                          className="px-6 text-sm font-medium dark:text-gray-400"
                        />
                      </tr>
                    )}
                  </tbody>
                </table>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={data.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </div>
            </div>
          </div>
        </Grid>
      ) : (
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {data.map((item: any, index: any) => (
            <li
              key={item.id}
              className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
            >
              <div className="flex w-full items-center justify-between space-x-6 p-6">
                <div className="flex-1 truncate">
                  <div className="flex items-center space-x-3">
                    {Object.entries(item).map(
                      ([key, value]: any) =>
                        key !== "id" &&
                        key !== "img" && ( // Exclude 'image' field, which we've already handled above
                          <h3
                            key={key}
                            className="truncate text-sm font-medium"
                          >
                            {value}
                          </h3>
                        )
                    )}
                    {item.id && (
                      <p className="mt-1 truncate text-sm text-gray-500">
                        {item.id}
                      </p>
                    )}
                  </div>
                </div>
                {item.img && (
                  <img
                    className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                    src={item.img}
                    alt={item.img}
                  />
                )}
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  <div className="flex w-0 flex-1">
                    <a
                      href={`mailto:${item.email}`}
                      className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                    >
                      <PencilSquareIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      Update
                    </a>
                  </div>
                  <div className="-ml-px flex w-0 flex-1">
                    <a
                      href={`tel:${item.telephone}`}
                      className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                    >
                      <TrashIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      Delete
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </ConterDefaull>
  );
}
