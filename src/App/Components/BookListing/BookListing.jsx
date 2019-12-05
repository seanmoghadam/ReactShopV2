import React from "react";
import PropTypes from "prop-types";

import { BookOverviewHeadline, BookOverviewList, BookOverviewListItem, CartBtn } from './BookListing.style';


const addSVG = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
</svg>;

const BookListing = (props) => {
  if (props.books && props.books.length !== 0){
    return <>
      <BookOverviewHeadline>Bücher Liste 2019</BookOverviewHeadline>
      <BookOverviewList>
        {
          props.books.map((book, index) => <BookOverviewListItem key={book.isbn + index}>
              <p>{book.title}</p>
              <img src={book.image} alt={book.title}/>
            <CartBtn onClick={() => props.addItemToCart(book)}>
              {addSVG}
            </CartBtn>
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
  books: PropTypes.array.isRequired,
  addItemToCart: PropTypes.func.isRequired
};

export default BookListing;


