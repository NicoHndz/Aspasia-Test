import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AddBookBox() {
  const navigate = useNavigate();
  
  return (
    <article className="flex flex-col items-center gap-y-5 py-[4em] lg:py-[7em] px-[2em] md:px-[4em]">
      <h1 className="text-3xl md:text-5xl font-semibold text-[#F37422] text-center">
        ¿No encuentras tu libro?
      </h1>
      <div className="bg-[#f3f3f3] rounded p-[2em] md:p-[5em] shadow-xl flex flex-col gap-y-5 items-center">
        <h2 className="text-2xl md:text-4xl font-semibold text-center">
        Agrégalo y contribuye a la comunidad.
        </h2>
        <Button
          variant="contained"
          color="warning"
          onClick={() => navigate("/agregar")}
        >
          agregar libro
        </Button>
      </div>
    </article>
  );
}
