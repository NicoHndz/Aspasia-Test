import { useParams } from "react-router-dom";
import { useProyectContext } from "../context/ProjectContext";
import BookDetails from "../components/bookDetails/BookDetails";
import NotFound from "./NotFound";
import { useEffect } from "react";

export default function Book() {
  const { isbn } = useParams();
  const { apiData } = useProyectContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {apiData.some((obj) => obj.isbn == isbn) ? (
        <BookDetails
          bookUrl={apiData.filter((obj) => obj.isbn === isbn)[0].url}
        />
      ) : (
        <NotFound />
      )}
    </>
  );
}
