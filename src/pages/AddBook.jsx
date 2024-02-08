import { useEffect } from "react";
import AddBookForm from "../components/addBookForm/AddBookForm";

export default function AddBook() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="flex flex-col lg:flex-row-reverse min-h-[70vh] items-center">
      <article className="w-full lg:w-1/2 px-2 py-[4em] flex flex-col gap-y-[1em] lg:gap-y-[2em]">
        <h2 className="text-2xl lg:text-4xl font-semibold text-center">
          Deja tu <span className="text-[#F37422]">huella</span>
        </h2>
        <h1 className="text-3xl lg:text-6xl font-semibold text-center">
          Agrega libros inexistentes y contribuye a la{" "}
          <span className="text-[#F37422]">comunidad</span>
        </h1>
      </article>
      <AddBookForm />
    </section>
  );
}
