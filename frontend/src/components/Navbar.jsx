import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="bg-gradient-to-r from-yellow-400 to-green-400 w-full px-10 py-4 flex justify-between items-center shadow-lg">
        {/* left side div */}
        <div>
          <p className="text-3xl font-semibold text-white">Logo</p>
        </div>

        {/* right side div */}
        <div className="flex space-x-4 items-center justify-center font-semibold list-none">
          <li
            className="text-white hover:text-black cursor-pointer hidden lg:block"
            onClick={() => navigate("/")}
          >
            Home
          </li>
          <li className="text-white hover:text-black cursor-pointer hidden lg:block">
            Contact
          </li>
          <li className="text-white hover:text-black cursor-pointer hidden lg:block">
            About us
          </li>
          <button
            className="bg-yellow-500 text-white px-4 py-1.5 rounded-md hover:scale-105 transition-all duration-700 ease-in-out shadow-sm"
            onClick={() => navigate("/add-book")}
          >
            Add Book
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
