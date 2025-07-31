import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-red-200 p-4 min-h-screen flex flex-col items-center gap-2 justify-center">
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p>Please check the URL or return to the home page.</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          navigate("/");
        }}
      >
        Return to Home
      </button>
    </div>
  );
};
