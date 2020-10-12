import React, { useState } from "react";
import { useParams } from "react-router-dom";

// Components
import BookTable from "./BookTable";
import SearchBar from "./SearchBar";

const BookList = (props) => {
  const [query, setQuery] = useState("");
  const { bookColor } = useParams();

  let filteredBooks = props.books.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase())
  );
  if (bookColor)
    filteredBooks = props.books.filter((book) => book.color === bookColor);

  return (
    <div>
      <h3>Books</h3>
      <SearchBar handleFilter={setQuery} />
      <BookTable books={filteredBooks} />
    </div>
  );
};

export default BookList;