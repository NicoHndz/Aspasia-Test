import { IconButton } from "@mui/material";
import { useProyectContext } from "../../../context/ProjectContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BrokenImageIcon from "@mui/icons-material/BrokenImage";
import { useState } from "react";

export default function FavButton({
  isbn = "978-0553103540",
  liked = false,
  buttonSize,
  iconSize,
}) {
  const { apiData, setApiData } = useProyectContext();
  const [likedState, setLikedState] = useState(liked);
  const [error, setError] = useState(false);

  const handleLikeClick = (isbn) => {
    try {
      apiData.find((obj) => obj.isbn === isbn).liked = !apiData.find(
        (obj) => obj.isbn === isbn
      ).liked;
      setLikedState(!likedState);
      setApiData([...apiData]);
    } catch {
      setError(true);
    }
  };

  return (
    <IconButton
      size={buttonSize}
      color={likedState ? "error" : "default"}
      onClick={() => handleLikeClick(isbn)}
    >
      {!error ? <FavoriteIcon fontSize={iconSize} /> : <BrokenImageIcon />}
    </IconButton>
  );
}
