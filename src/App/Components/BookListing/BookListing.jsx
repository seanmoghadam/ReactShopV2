import React from "react";

import {
  BookOverviewHeadline,
  BookOverviewList,
  BookOverviewListItem,
  CartBtn
} from './BookListing.style';
import { AppContext } from '../../App';

import { Link } from "react-router-dom";


const addSVG = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
</svg>;


const BookListing = () => {
  
  return <AppContext.Consumer>
    {
      context => {
        if (context.books && context.books.length !== 0) {
          return <>
            <BookOverviewHeadline>Bücher Liste 2019</BookOverviewHeadline>
            <BookOverviewList>
              {
                context.books.map((book, index) =>
                  <BookOverviewListItem key={book.isbn + index}>
                    <p>{book.title}</p>
                    <Link to={"/details/" + book.isbn}>
                      <img src={book.image} alt={book.title}/>
                    </Link>
                    <CartBtn onClick={() => context.addItemToCart(book)}>
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
      }
    }
  </AppContext.Consumer>
  
  
};

BookListing.propTypes = {};

export default BookListing;


