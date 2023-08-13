import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div className="flex flex-col h-screen gap-5">
      <nav className="sticky top-0 w-screen">
        <Navbar />
      </nav>
      <div className="flex justify-center items-center h-80 flex-col gap-2 ">
        <h1 className="text-2xl">Welcome To Sceen Score</h1>
        <Link
          to="/movies"
          className="bg-zinc-400 text-black p-2 rounded-sm hover:bg-slate-400"
        >
          Select Movies For the Weekend
        </Link>
      </div>
    </div>
  );
};

export default Home;
