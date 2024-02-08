import { useProyectContext } from "./context/ProjectContext";
import Loading from "./components/utils/loading/Loading";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/utils/navBar/Navbar";
import Book from "./pages/Book";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";
import Footer from "./components/utils/footer/Footer";
import ApiError from "./components/utils/apiError/ApiError";

export default function App() {
  const { loadingSwitch, apiError } = useProyectContext();
  return (
    <>
      {!apiError ? (
        <>
          {loadingSwitch ? (
            <>
              <main className="bg-[#FFF3CF] min-h-[100vh]">
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/favoritos" element={<Favorites />} />
                  <Route path="/book/:isbn" element={<Book />} />
                  <Route path="/agregar" element={<AddBook />} />
                  <Route path="/*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </>
          ) : (
            <Loading />
          )}
        </>
      ) : (
        <ApiError />
      )}
    </>
  );
}
