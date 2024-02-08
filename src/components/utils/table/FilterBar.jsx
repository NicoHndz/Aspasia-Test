import { IconButton, Input } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

export const FilterBar = ({ filter = '', setFilter }) => {
  return (
    <article className="flex gap-x-2 items-center py-3 px-2">
      <p className="font-semibold">Buscar:</p>
      <Input
      color="warning"
        type="text"
        value={filter || ""}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
      {filter !== '' && <IconButton size="small" color="warning" onClick={() => { setFilter('') }}><ClearIcon fontSize="small"/></IconButton>}
    </article>
  );
};
