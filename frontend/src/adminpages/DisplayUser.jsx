import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function DisplayUser() {
  const [data, setData] = useState([]);
  const [totalStudent, setTotalStudent] = useState(0);

  //fuction to get the student data
  async function getStudentData() {
    try {
      const result = await fetch("/proxy/admin-get-student", {
        headers: { "content-type": "application/json" },
        method: "GET",
      });

      const recivedData = await result.json();
      console.log(recivedData);
      setData(recivedData.studentdata);
      setTotalStudent(recivedData.totalStudent);
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Something went wrong");
    }
  }

  //function to delete user
  async function deleteUser(id) {
    try {
      const result = await fetch(`/proxy/delete-user/${id}`, {
        headers: { "content-type": "application/json" },
        method: "DELETE",
      });

      const re = await result.json();

      if (re) {
        toast.success(re.msg);
        setData(data.filter((items) => items.id !== id));
        setTotalStudent(totalStudent - 1);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Something went wrong");
    }
  }

  //use effect hook to call the function on page render
  useEffect(() => {
    getStudentData();
  }, []);

  return (
    <>
      <div className="bg-gray-200/40 min-h-screen p-4">
        <div className="flex items-center justify-between">
          <p className="font-bold text-4xl bg-gradient-to-r from-yellow-400 to-green-400 pb-2 w-fit text-transparent bg-clip-text">
            Display All User
          </p>
          <span>
            Total Students:{" "}
            <span className="font-bold text-2xl">{totalStudent}</span>
          </span>
        </div>

        <table className="w-full table-fixed  text-white mt-4 rounded-md shadow-md">
          <thead className="bg-lime-500">
            <tr>
              <th className="p-2 ">Id</th>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>

          <tbody className=" text-black">
            {data.map((items) => (
              <tr key={items.id} className="bg-white even:bg-gray-200 ">
                <td className="p-4">{items.id}</td>
                <td className="p-4">{items.name}</td>
                <td className="p-4">{items.email}</td>
                <td className="flex justify-center items-center gap-2 p-4">
                  <button
                    onClick={() => deleteUser(items.id)}
                    className="bg-red-500 text-white py-2 px-4 rounded-lg"
                  >
                    Delete
                  </button>
                  <button className="bg-lime-500 text-white py-2 px-4 rounded-lg">
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DisplayUser;
