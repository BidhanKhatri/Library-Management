import { FaBook, FaHome, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function AdminNavbar() {
  return (
    <>
      <nav className="w-64 bg-tailwindkocolor h-screen sticky px-4 py-4 text-white">
        <ul className="space-y-4">
          <Link
            to="/admin/dashboard"
            className="bg-gray-200/20 hover:bg-gray-200/40 transition-all duration-700 p-2 rounded-md cursor-pointer flex items-center"
          >
            <FaHome size={20} />{" "}
            <span className="ml-3 font-semibold"> Dashboard</span>
          </Link>

          <Link
            to="/admin/display-users"
            className="bg-gray-200/20 hover:bg-gray-200/40 transition-all duration-700 p-2 rounded-md cursor-pointer flex items-center"
          >
            <FaUser size={20} />{" "}
            <span className="ml-3 font-semibold"> Display Users</span>
          </Link>

          <Link
            to="/admin/display-all-book"
            className="bg-gray-200/20 hover:bg-gray-200/40 transition-all duration-700 p-2 rounded-md cursor-pointer flex items-center"
          >
            <FaBook size={20} />{" "}
            <span className="ml-3 font-semibold"> All Books</span>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default AdminNavbar;
