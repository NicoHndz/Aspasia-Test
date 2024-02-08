import AddBookBox from "../components/utils/addBookBox/AddBookBox";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-2 py-[3em]">
      <h1 className="text-9xl lg:text-9xl text-center font-semibold">404!</h1>
      <AddBookBox />
    </div>
  );
}
