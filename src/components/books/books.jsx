import React, { useState, useRef } from "react";
import Header from "../header/Header";
import Form from "../form/Form";
import BooksContainer from "../booksContainer/BooksContainer";
import ClearUp from "../clearUp/ClearUp";

const Todo = () => {
  const [data, setData] = useState([]);
  const [clearUp, setClearUp] = useState(false);
  const addBook = (newBook) => {
    setData((prev) => [...prev, newBook]);
  };

  const ref = useRef(null);
  const handleScroll = () => {
    ref.current.scrollTop >= 400 ? setClearUp(true) : setClearUp(false);
  };
  if (ref.current) {
    ref.current.addEventListener("scroll", handleScroll);
  }

  const clearData = () => {
    setData([]);
  };

  const scrollUp = () => {
    ref.current.scrollTop = 0;
  };

  return (
    <section
      ref={ref}
      className="fixed inset-0 flex items-center justify-start flex-col overflow-y-auto pt-20 scroll-smooth"
    >
      <Header />
      <Form addBook={addBook} />
      <BooksContainer data={data} />
      <ClearUp status={clearUp} clearData={clearData} scrollUp={scrollUp} />
    </section>
  );
};

export default Todo;
