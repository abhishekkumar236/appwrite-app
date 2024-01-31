import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error("error", error);

  return (
    <div className="text-white min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl font-semibold mb-3">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
