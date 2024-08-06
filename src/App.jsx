import React from "react";
import BgBanner from "./components/bgBanner/BgBanner";
import Book from "./components/books/books";
import BooksContainer from "./components/booksContainer/BooksContainer";

const App = () => {
  return (
    <main className="min-h-screen bg-sky-950 font-josefin">
      <BgBanner />
      <Book />
    </main>
  );
};

export default App;
