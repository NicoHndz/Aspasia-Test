import Banner from "../components/utils/banner/Banner";
import AddBookBox from "../components/utils/addBookBox/AddBookBox";
import Table from "../components/utils/table/Table";
import { useProyectContext } from "../context/ProjectContext";
import { useEffect } from "react";

export default function Home() {
  const { apiData } = useProyectContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <Banner />
      <Table tableData={apiData} />
      <AddBookBox />
    </section>
  );
}
