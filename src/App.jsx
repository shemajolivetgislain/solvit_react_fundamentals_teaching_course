import { Profile } from "./components/Profile";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      className={` min-h-dvh flex flex-col gap-6 items-center  pt-20 justify-center ${
        theme === "light"
          ? "bg-white text-purple-800"
          : "bg-purple-950 text-white"
      }`}
    >
      <button
        onClick={toggleTheme}
        className={`px-5 py-1 ${
          theme === "light"
            ? "bg-purple-800 text-white"
            : "bg-purple-100 border border-purple-800 text-white"
        }`}
      >
        {" "}
        ChangeTheme
      </button>
      <Profile />
    </div>
  );
}

export default App;
