import { useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full flex justify-center items-center">
      {" "}
      <div className="font-work-sans text-2xl font-bold text-center">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <button
          onClick={() => navigate(-1)}
          className="btn-xs btn sm:btn-sm md:btn-md btn-outline mt-2"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};
