import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="w-screen flex flex-col items-center justify-center h-screen text-center bg-backgroundColor-purpleStart">
      <h1 className="text-5xl mb-4 text-buttonColor-primary">
        404 - Page Not Found
      </h1>
      <p className="text-2xl mb-6">
        The page you are looking for does not exist.
      </p>
      <Link
        to={"/"}
        className="decoration-transparent text-buttonColor-secondary font-bold hover:underline hover:text-red-100 hover:text-lg"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
