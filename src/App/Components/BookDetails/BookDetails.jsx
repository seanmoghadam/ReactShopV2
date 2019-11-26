import React, { useEffect, useState } from "react";
import { getBookById } from '../../../api';
import { BookDetailsListing, BookDetailsWrapper } from './BookjDetails.style';

const BookDetails = (props) => {
  console.log(props);
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    
    getBookById(props.match.params.id)
      .then(book => {
        setBook(book);
        setLoading(false);
      })
      .catch(err => console.error(err))
    
  }, []);
  
  if (loading) return "Loading...";
  
  
  return <BookDetailsWrapper>
    <BookDetailsListing>
       {Object.keys(book).map((key, index) => <li key={key + index}>{book[key]}</li>)}
    </BookDetailsListing>
  </BookDetailsWrapper>;
};

export default BookDetails;
