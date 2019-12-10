import React from "react";
import {Switch, Route} from "react-router-dom";
import BookListing from './App/Components/BookListing/BookListing';
import BookDetails from './App/Components/BookDetails/BookDetails';
import Error from "./App/Components/Error/Error"


export default <Switch>
  <Route path="/" exact={true} render={props => <BookListing {...props}/>}/>
  <Route path="/details/:id" exact={true} render={props => <BookDetails {...props}/>}/>
  <Route path="*" render={props => <Error {...props}/>}/>
</Switch>
