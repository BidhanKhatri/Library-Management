import { Routes, Route } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import DisplayAllBook from "./DisplayAllBook";
import DisplayUser from "./DisplayUser";

function AdminDashboard() {
  return (
    <>
      <div className="flex">
        <div>
          <AdminNavbar />
        </div>

        <div className="flex-1 bg-gray-200/40">
          <Routes>
            <Route
              path="/admin/display-all-book"
              element={<DisplayAllBook />}
            />
            <Route path="/admin/display-users" element={<DisplayUser />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
