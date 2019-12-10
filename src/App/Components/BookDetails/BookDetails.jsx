import React, { useEffect, useState } from "react";
import { getBookById } from '../../../api';

const BookDetails = (props) => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    getBookById(props.match.params.id)
      .then(book => {
        setBook(book);
      })
      .catch(e => console.error(e))
      .finally(() => setLoading(false))
    
  }, []);
  
  
  return <div>
    {!loading && <p>{book.title}</p>}
  </div>
};

export default BookDetails;
