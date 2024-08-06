import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ addBook }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  const createBook = (e) => {
    e.preventDefault();
    addBook({
      id: uuidv4(),
      title,
      price,
      url,
      description,
    });
    setTitle("");
    setPrice("");
    setUrl("");
    setDescription("");
  };
  return (
    <>
      <form
        onSubmit={createBook}
        className="mt-10 flex flex-col gap-2 w-full px-2 max-w-[30rem]"
        id="submit"
      >
        <div className="flex items-center justify-start gap-4 md bg-slate-800 p-4 rounded-md shadow-sm shadow-yellow-500">
          <span className="text-slate-100">Title:</span>
          <input
            required
            type="text"
            placeholder="Title of the book..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-transparent w-full placeholder:text-slate-600 border-non outline-none text-slate-100 pl-1"
          />
        </div>
        <div className="flex items-center justify-start gap-4 bg-slate-800 p-4 rounded-md shadow-sm shadow-yellow-500">
          <span className="text-slate-100">Price:</span>
          <input
            required
            type="number"
            placeholder="Price of the book..."
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="bg-transparent w-full placeholder:text-slate-600 border-non outline-none text-slate-100 pl-1"
          />
        </div>
        <div className="flex items-center justify-start gap-4 bg-slate-800 p-4 rounded-md shadow-sm shadow-yellow-500">
          <span className="text-slate-100 text-nowrap">IMG url:</span>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter img url path..."
            className="bg-transparent w-full placeholder:text-slate-600 border-non outline-none text-slate-100 pl-1"
          />
        </div>
        <div className="flex items-center justify-start gap-4 bg-slate-800 p-4 rounded-md shadow-sm shadow-yellow-500">
          <span className="text-slate-100">Description:</span>
          <input
            required
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description of the book..."
            className="bg-transparent w-full placeholder:text-slate-600 border-non outline-none text-slate-100 pl-1"
          />
        </div>
      </form>
      <button
        form="submit"
        className="btn bg-slate-600 text-slate-100 hover:bg-blue-800 duration-200 active:opacity-75 p-2 w-full scale-x-95 max-w-[30rem] rounded-lg mt-4"
      >
        Add Book
      </button>
    </>
  );
};

export default Form;
