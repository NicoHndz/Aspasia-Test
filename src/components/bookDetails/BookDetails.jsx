import { useState } from "react";
import Loading from "../utils/loading/Loading";
import { useEffect } from "react";
import { useProyectContext } from "../../context/ProjectContext";

import { useParams } from "react-router-dom";
import FavButton from "../utils/favButton/FavButton";

export default function BookDetails({ bookUrl }) {
  const { apiData, setApiError } = useProyectContext();
  const { isbn } = useParams();
  const [bookData, setBookData] = useState([]);
  const [bookDataLoading, setBookDataLoading] = useState(false);

  const getData = async () => {
    if (bookUrl !== "NO") {
      try {
        const response = await fetch(bookUrl);
        const data = await response.json();
        setBookData(data);
        setBookDataLoading(true);
      } catch (error) {
        setApiError(true);
      }
    } else {
      const data = apiData.filter((obj) => obj.isbn === isbn);
      setBookData(data[0]);
      setBookDataLoading(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {bookDataLoading ? (
        <section>
          <article className="h-[300px] sm:h-[400px] flex flex-col items-center justify-center">
            <h1 className="text-center text-5xl xl:text-8xl font-semibold text-[#E8C872] px-2">
              {bookData.name}
            </h1>
            <h2 className="text-2xl xl:text-4xl font-semibold text-[#F37422]">
              {bookData.authors}
            </h2>
            <FavButton
              isbn={bookData.isbn}
              liked={apiData.find((obj) => obj.isbn === bookData.isbn).liked}
              buttonSize={"large"}
              iconSize={"large"}
            />
          </article>
          <article className="flex flex-col md:flex-row justify-center items-center gap-3 py-3">
            <div className="flex flex-col xl:flex-row gap-3">
              <div className="flex flex-col items-center bg-white p-3 w-[250px] rounded shadow-slate-50">
                <h3 className="font-semibold">ISBN:</h3>
                {bookData.isbn}
              </div>
              <div className="flex flex-col items-center bg-white p-3 w-[250px] rounded shadow-slate-50">
                <h3 className="font-semibold">Paginas:</h3>
                {bookData.numberOfPages}
              </div>
            </div>
            <div className="flex flex-col xl:flex-row gap-3">
              <div className="flex flex-col items-center bg-white p-3 w-[250px] rounded shadow-slate-50">
                <h3 className="font-semibold">Editorial:</h3>
                {bookData.publisher}
              </div>
              <div className="flex flex-col items-center bg-white p-3 w-[250px] rounded shadow-slate-50">
                <h3 className="text-center font-semibold">
                  Fecha de lanzamiento:
                </h3>
                {bookData.released.replace("T00:00:00", "")}
              </div>
            </div>
          </article>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
}
