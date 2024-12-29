import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

function DisplayAllBooks() {
  const [books, setBooks] = useState([]);

  async function getBooks() {
    try {
      const result = await fetch("/proxy/get-all-books");

      const data = await result.json();

      if (data && data.status === 200) {
        setBooks(data.allbooksdata);
        console.log(data.allbooksdata);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getBooks();
  }, []);

  const BASE_URL = "http://localhost:3000";

  return (
    <div className="  px-10 grid grid-cols-3 gap-8 my-4">
      {books.map((book) => (
        <div key={book._id}>
          <div className="bg-white/40 p-6 max-w-md rounded-xl shadow-md  backdrop-blur-lg w-full flex flex-col gap-4">
            <img
              src={`${BASE_URL}/images/${book.image}`}
              alt="img"
              className="w-full h-56 rounded-md"
            />
            <div className="flex gap-2">
              {" "}
              <p className="font-bold text-3xl">{book.bookname}</p>
              <div className=" py-2 rounded-md">
                <span className=" text-xs">
                  <span className="bg-yellow-500 rounded-md px-2 py-0.5 text-white">
                    Genere
                  </span>{" "}
                  {book.genere?.join(", ")}
                </span>
              </div>
            </div>
            <div className="bg-lime-200/20 py-2 rounded-md">
              <span className=" ml-2">
                {" "}
                {book.description.slice(0, 30) + "..."}
              </span>
            </div>
            <div className=" flex">
              <button className="bg-yellow-500 text-white px-4 py-1.5 rounded-md hover:scale-105 transition-all duration-700 ease-in-out shadow-sm w-full">
                View Book
              </button>
              <button className="bg-lime-500 text-white px-4 py-1.5 rounded-md hover:scale-105 transition-all duration-700 ease-in-out shadow-sm ml-2 w-full">
                Purchase{" "}
              </button>
            </div>

            <div className="flex justify-between">
              <div>
                <span className="font-semibold text-white bg-lime-500 rounded-md px-2 py-0.5">
                  Author{" "}
                </span>{" "}
                <span className="font-semibold text-lime-700 ml-2">
                  {" "}
                  {book.author}
                </span>
              </div>
              <div className="flex">
                <button>
                  <FaRegHeart size={20} />
                </button>
                <button className="ml-4">
                  <FiShoppingCart size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayAllBooks;
