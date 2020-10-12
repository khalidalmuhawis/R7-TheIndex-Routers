import React from "react";
import BookRow from "./BookRow";


const BookTable = (props) => {
  const bookRows = props.books.map((book) => (
    <BookRow key={book.title + book.color} book={book} />
  ));
  return (
    <table className="mt-3 table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Authors</th>
          <th>Color</th>
        </tr>
      </thead>
      <tbody>{bookRows}</tbody>
    </table>
  );
};
export default BookTable;