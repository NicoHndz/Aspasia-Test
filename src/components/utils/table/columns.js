export const COLUMNS = [
  { Header: "Nombre", accessor: "name" },
  { Header: "Autor", accessor: "authors" },
  {
    Header: "Lanzamiento",
    accessor: "released",
    Cell: ({ value }) => {
      return value.replace("T00:00:00", "");
    },
  },
];
