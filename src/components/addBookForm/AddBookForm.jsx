import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useProyectContext } from "../../context/ProjectContext";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function AddBookForm() {
  const { apiData, setApiData } = useProyectContext();
  const [formState, setformState] = useState(false);
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState(0);
  const [publisher, setPublisher] = useState("");
  const [released, setReleased] = useState("");

  const handleSbumit = (e) => {
    e.preventDefault();
    const randomISBN = `${Math.floor(Math.random() * 10001)}-0553${Math.floor(
      Math.random() * 10001
    )}`;
    const newBook = {
      url: "NO",
      name,
      isbn: randomISBN,
      authors: author,
      liked: false,
      numberOfPages: pages,
      publisher,
      released,
    };
    setApiData([...apiData, newBook]);
    setName("");
    setAuthor("");
    setPages(0);
    setPublisher("");
    setReleased("");
    setformState(true);
  };

  return (
    <article className="flex justify-center py-[3em] w-1/2">
      {!formState ? (
        <form
          onSubmit={handleSbumit}
          className="bg-white p-[1em] sm:p-[3em] rounded flex flex-col gap-y-4 "
        >
          <h2 className="text-3xl text-center font-semibold pb-[1em] w-96 xl:w-full">
          Ingresa la información <br/>del libro:
          </h2>
          <div className="flex flex-col xl:flex-row gap-3">
            <TextField
              required
              color="warning"
              label="Título"
              onBlur={(e) => setName(e.target.value)}
            />
            <TextField
              required
              color="warning"
              label="Autor"
              onBlur={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="flex flex-col xl:flex-row gap-3">
            <TextField
              color="warning"
              label="Páginas"
              type="number"
              required
              inputProps={{ min: "1" }}
              onChange={(e) => setPages(e.target.value)}
            />
            <TextField
              required
              color="warning"
              label="Editorial"
              onBlur={(e) => setPublisher(e.target.value)}
            />
          </div>
          <div className="flex flex-col xl:flex-row gap-3">
            <TextField
              required
              color="warning"
              label="Lanzamiento"
              type="date"
              className="xl:w-1/2"
              onChange={(e) => setReleased(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <div className="flex justify-center items-center lg:w-1/2">
              <Button
                size="large"
                type="submit"
                variant="contained"
                color="warning"
                disabled={
                  name == "" ||
                  author == "" ||
                  pages <= 0 ||
                  publisher == "" ||
                  released == ""
                    ? true
                    : false
                }
              >
                agregar
              </Button>
            </div>
          </div>
        </form>
      ) : (
        <div className="bg-white p-[1em] sm:p-[3em] rounded flex flex-col items-center gap-y-4 ">
          <h2 className="text-3xl text-center font-semibold w-96 xl:w-full">
            Agregado con exito!
          </h2>
          <CheckCircleIcon color="success" sx={{ fontSize: "50px" }} />
          <Button
            variant="contained"
            color="warning"
            onClick={() => setformState(false)}
          >
            agregar mas libros
          </Button>
        </div>
      )}
    </article>
  );
}
