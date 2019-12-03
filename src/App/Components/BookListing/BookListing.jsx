import React from "react";
import PropTypes from "prop-types";
import { BookOverviewHeadline, BookOverviewList, BookOverviewListItem, CartBtn } from './BookListing.style';

const BookListing = (props) => {
  if (props.books && props.books.length !== 0){
    return <>
      <BookOverviewHeadline>Bücher Liste 2019</BookOverviewHeadline>
      <BookOverviewList>
        {
          props.books.map((book, index) => <BookOverviewListItem key={book.isbn + index}>
              <p>{book.title}</p>
              <img src={book.image} alt={book.title}/>
            </BookOverviewListItem>
          )
        }
      </BookOverviewList>
      </>
  } else {
    return "Aktuell gibt es keine Bücher"
  }
  
};

BookListing.propTypes = {
  books: PropTypes.array
};

export default BookListing;


