import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "The Green Mile: Part 1", id: 1 },
    { title: "The Green Mile: Part 2", id: 2 },
    { title: "The Green Mile: Part 3", id: 3 },
    { title: "The Green Mile: Part 4", id: 4 },
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
