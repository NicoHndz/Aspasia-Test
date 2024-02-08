import { useSortBy, useTable, useGlobalFilter } from "react-table";
import { COLUMNS } from "./columns";
import { IconButton } from "@mui/material";
import { FilterBar } from "./FilterBar";
import SortIcon from "@mui/icons-material/Sort";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { useNavigate } from "react-router-dom";
import FavButton from "../favButton/FavButton";


export default function Table({ tableData }) {

  const navigate = useNavigate();

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    { columns: COLUMNS, data: tableData },
    useGlobalFilter,
    useSortBy
  );

  const { globalFilter } = state;

  return (
    <article className="flex flex-col items-center overflow-x-auto sm:overflow-visible min-h-[40vh]">
      <FilterBar filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()} className="">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  <div className=" flex justify-around items-center">
                    <h3 className="font-semibold">{column.render("Header")}</h3>
                    <IconButton
                      size="small"
                      color="warning"
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <ArrowUpwardIcon />
                        ) : (
                          <ArrowDownwardIcon />
                        )
                      ) : (
                        <SortIcon />
                      )}
                    </IconButton>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="hover:shadow-xl">
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="p-2"
                    >
                      <p className="lg:w-[300px] font-semibold">{cell.render("Cell")}</p>
                    </td>
                  );
                })}
                <td className="flex gap-x-3 p-2">
                  <IconButton
                    size="small"
                    color="warning"
                    onClick={() => navigate(`/book/${row.original.isbn}`)}
                  >
                    <ReadMoreIcon fontSize="small" />
                  </IconButton>
                  <FavButton
                    isbn={row.original.isbn}
                    liked={row.original.liked}
                    buttonSize={"small"}
                    iconSize={"small"}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </article>
  );
}
