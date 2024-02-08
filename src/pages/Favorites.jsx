import { Button } from "@mui/material";
import Table from "../components/utils/table/Table";
import { useProyectContext } from "../context/ProjectContext";
import { useNavigate } from "react-router-dom";

import Banner from "../components/utils/banner/Banner";
import AddBookBox from "../components/utils/addBookBox/AddBookBox";

export default function Favorites() {
  const { apiData } = useProyectContext();
  const navigate = useNavigate();
  const favData = apiData.filter((item) => item.liked === true);

  return (
    <section>
      <Banner />
      {favData.length !== 0 ? (
        <Table tableData={favData} />
      ) : (
        <div className="h-[40vh] flex flex-col justify-center items-center gap-y-3 px-2">
          <h1 className="text-2xl lg:text-4xl text-center">
          No tienes ningún libro agregado a tu lista de favoritos.
          </h1>
          <Button
            variant="contained"
            color="warning"
            onClick={() => navigate("/")}
          >
            ver libros
          </Button>
        </div>
      )}
      <AddBookBox />
    </section>
  );
}
