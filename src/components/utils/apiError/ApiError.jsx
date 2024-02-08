export default function ApiError() {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center gap-y-3">
      <h1 className="text-5xl text-center font-semibold">Error de servidor</h1>
      <h2 className="text-3xl text-center font-semibold">
        Inténtalo más tarde.
      </h2>
    </div>
  );
}
